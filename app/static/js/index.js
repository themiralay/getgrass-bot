// Function to show logs in a modal
function showLogs (userId) {
  fetch(`/client/${userId}`)
    .then(response => response.json())
    .then(data => {
      const logs = data.data.logs
      const logText = logs.map(log => `[${log[0]}] -- ${log[1]}`).join('<br>')
      document.getElementById('logText').innerHTML = logText
      document.getElementById('logsModal').style.display = 'block'
    })
    .catch(error => console.error('Error:', error))
}

// Update the statistics of online connections
function updateOnlineCount (onlineCount, allCount) {
  // Get the <span> elements to display the connection count
  const onlineCountElement = document.getElementById('onlineCount')
  const allCountElement = document.getElementById('allCount')
  onlineCountElement.textContent = onlineCount
  allCountElement.textContent = allCount
}

// Prompt dialog to input user_id and proxy
function addUser () {
  const userId = prompt('Please enter UserID:')
  if (!userId) {
    return
  }
  const proxy = prompt('Set proxy (click cancel if not using proxy)')
  if (userId) {
    // Construct URL with parameters
    const baseUrl = '/client/'
    const url = new URL(baseUrl, window.location.href)
    url.searchParams.append('user_id', userId)
    if (proxy) {
      url.searchParams.append('proxy_url', proxy)
    }
    fetch(url.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          alert('User added successfully')
          fetchData()
        } else {
          alert('Failed to add user')
        }
      })
      .catch(error => {
        alert('Request error:', error)
      })
  }
}

// Function to delete a user
function deleteUser (userId) {
  fetch(`/client/${userId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        alert('Delete successful')
        // If deletion is successful, reload all data
        fetchData()
      }
    })
    .catch(error => console.error('Error:', error))
}

// Function to delete all users
function deleteAllUser () {
  showLoading()
  fetch('/client/', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        alert('Delete successful')
        // If deletion is successful, reload all data
        fetchData()
      }
      hideLoading()
    })
    .catch(error => {
      console.error('Error:', error)
      hideLoading()
    })
}

// Function to upload a file
function uploadFile () {
  const input = document.createElement('input')
  input.type = 'file'
  input.onchange = function () {
    const file = input.files[0]
    const formData = new FormData()
    formData.append('file', file)
    showLoading()
    fetch('/upload/', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          alert('File uploaded successfully')
          fetchData()
        } else {
          alert('Failed to upload file!')
        }
        hideLoading()
      })
      .catch(error => {
        console.error('Error:', error)
        hideLoading()
      })
  }
  input.click()
}

// Function to close the modal
function closeModal () {
  document.getElementById('logsModal').style.display = 'none'
}

// Function to fetch data (simulate data request)
function fetchData () {
  return new Promise((resolve, reject) => {
    // Make a GET request to the API endpoint
    fetch('/client/')
      .then(response => response.json())
      .then(data => {
        const statusMap = {
          0: 'Not connected',
          1: 'Connecting',
          2: 'Connected',
          3: 'Stopped'
        }
        let counter = 0 // Initial number is 1
        let onlineCounter = 0
        const tableBody = document.querySelector('#data-table tbody')
        // Clear existing data in the table
        tableBody.innerHTML = ''

        data.data.forEach(item => {
          const row = document.createElement('tr')
          row.innerHTML = `
                <td>${counter + 1}</td>
                <td>${item.user_id}</td>
                <td class="proxy">${item.proxy_url || ''}</td>
                <td class="status-${item.status}">${statusMap[item.status]}</td>
                <td>
                    <button onclick="showLogs('${item.id}')">Logs</button>
                    <button onclick="deleteUser('${item.id}')">Delete</button>
                </td>
            `
          tableBody.appendChild(row)
          counter++
          if (item.status == 2) {
            onlineCounter++
          }
        })
        updateOnlineCount(onlineCounter, counter)
        resolve()
      })
      .catch(error => console.error('Error:', error))
  })
}

// Function to fetch data at intervals
function fetchDataInterval () {
  fetchData().then(() => {
    // Wait for 5 seconds after data request is completed before initiating the next request
    setTimeout(fetchDataInterval, 5000)
  })
}

// Function to show loading indicator
function showLoading () {
  document.getElementById('loading').style.display = 'block'
}

// Function to hide loading indicator
function hideLoading () {
  document.getElementById('loading').style.display = 'none'
}

// Initiate fetching data at intervals
fetchDataInterval()

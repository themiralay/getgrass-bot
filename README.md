# Get Grass With WebUI

Welcome to GetGrass WebUI, a powerful Python tool designed to help you accumulate grass score across multiple accounts effortlessly.

## Features

- Supports multiple accounts
- Easy to use WebUI
- Proxy support for each account
- Docker support for easy deployment

## Running the Application

### Directly

1. Install the required Python packages:
    ```bash
    pip3 install -r requirements.txt
    ```
2. Start the application:
    ```bash
    python3 main.py
    ```
3. Open your web browser and visit `http://127.0.0.1:8000`.
4. Click on "Upload File" and upload your pre-configured `account.txt` file.

### With Docker Compose

1. Clone the project:
    ```bash
    git clone https://github.com/Confusion-ymc/GetGrassWebUI.git
    ```
2. Start the application with Docker Compose:
    ```bash
    docker compose up --build -d
    ```
3. Open your web browser and visit `http://{container_ip}:8000`.
4. Click on "Upload File" and upload your pre-configured `account.txt` file.

## `account.txt` File Format

- Without Proxy Configuration
  - Each line represents one account configuration.
  - If there's no proxy, the format is simply `user_id` on one line, separated by a dash (`-----`).
- With Proxy Configuration
  - If using a proxy, append `==proxy_address` at the end of the line. The format is `user_id==socks5://proxy.com:1080`.

- For example:
 ```text
d1b88fee-8078-46bc-aaed-df7196183f5f==http://proxy.com:8080
d1b88fee-8078-46bc-aaed-df7196183f5f
d1b88fee-8078-46bc-aaed-df7196183f5f==socks5://proxy.com:1080
```

## Join Us

Ready to start your journey with GetGrass WebUI? [Sign up](https://app.getgrass.io/register/?referralCode=I03C7kFL7tLZUH6) using our referral link and let's grow together!

## Support Us

Love our work? You can support us by sending your donations to the following Ethereum address: `0xE0CF9bc10C3589A4713A6Ff10e34964c089B0b52`. Your support is greatly appreciated!

This README provides more detailed information about your project, including how to run the application and the format of the `account.txt` file. It also includes a call to action for users to sign up using your referral link and a request for donations to your Ethereum address.
# GetGrass WebUI

GetGrass WebUI, çim puanınızı birden çok hesapla almanızı sağlayan bir Python aracıdır. Bu araç, kullanıcıların hesap bilgilerini yüklemelerine ve çim puanlarını otomatik olarak almasına olanak sağlar.

## Başlangıç

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

- Python 3
- Pip (Python Paket Yöneticisi)

### Kurulum

1. Projeyi klonlayın:
    ```bash
    git clone https://github.com/Confusion-ymc/GetGrassWebUI.git
    ```
2. Gerekli Python paketlerini yükleyin:
    ```bash
    pip3 install -r requirements.txt
    ```
3. Uygulamayı başlatın:
    ```bash
    python3 main.py
    ```
4. Tarayıcınızda `http://127.0.0.1:8000` adresini ziyaret edin.
5. "Dosya Yükle" düğmesine tıklayarak düzenlenmiş `account.txt` dosyasını yükleyin.

## Docker ile Çalıştırma

1. Projeyi klonlayın:
    ```bash
    git clone https://github.com/Confusion-ymc/GetGrassWebUI.git
    ```
2. Docker Compose ile uygulamayı başlatın:
    ```bash
    docker compose up --build -d
    ```
3. Tarayıcınızda `http://{container_ip}:8000` adresini ziyaret edin.
4. "Dosya Yükle" düğmesine tıklayarak düzenlenmiş `account.txt` dosyasını yükleyin.

## `account.txt` Dosya Formatı

- Proxy Konfigürasyonu Olmadan
  - Her satır bir hesap konfigürasyonunu temsil eder.
  - Proxy yoksa, format sadece bir satırda `user_id`, bir çizgi (`-----`) ile ayrılır.
- Proxy Konfigürasyonu ile
  - Proxy kullanılıyorsa, satırın sonuna `==proxy_address` ekleyin. Format `user_id==socks5://proxy.com:1080` şeklindedir.

- Örneğin:
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
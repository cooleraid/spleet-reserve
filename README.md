# Spleet-reservation-overstay-fee-calculator-REST-API

Spleet REST API to calculate reservation overstay fee

## Requirements

1. Mac OS (feel free to use any OS).
2. [NodeJS](https://nodejs.org/en/download/).
3. [MySQL](https://www.mysql.com/downloads/).
   1. [TablePlus](https://tableplus.com/) (Feel free to use any database management tool)
4. [Git](https://git-scm.com/).

## Setup

#### NodeJS:

1. Download and Install [NodeJS](https://nodejs.org/en/download/) on your OS.

#### MySQL:

1. Download and Install [MySQL](https://www.mysql.com/downloads/) on your OS. Follow the documentation to start up your MySQL server.
2. Download and Install [TablePlus](https://tableplus.com/) on your Mac OS.
3. Launch TablePlus database management GUI client and create a new connection to your local database.
   1. Create a new database called "spleet".
   2. Import [this MySQL](https://github.com/cooleraid/spleet-reserve/blob/master/db/spleet.sql) file into the database
   3. Store the database variables in your OS environment by running:
   ```bash
   export DB_HOST=YOUR-DATABASE-HOST
   ```
   ```bash
   export DB_USER=YOUR-DATABASE-USER
   ```
   ```bash
   export DATABASE_NAME=spleet
   ```
   ```bash
   export DB_PASSWORD=YOUR-DATABASE-PASSWORD
   ```

#### Git:

1. Download and Install [Git](https://git-scm.com/) on your OS.
2. Launch your terminal and clone the project by running:

```bash
git clone https://github.com/cooleraid/spleet-reserve.git
```

## Usage

Navigate to the project directory in your terminal and install the project's dependencies

```bash
npm install
```

Set the project's PORT by running:

```bash
export PORT=1500
```

Note: Replace "1500" with your preferred PORT.

Start the project's server by running:

```bash
npm run start
```
## REST API Documentation

The REST API is documented using postman and can be accessed [here](https://documenter.getpostman.com/view/2943325/UVJWpzgH).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://github.com/cooleraid/spleet-reserve/blob/master/LICENSE)

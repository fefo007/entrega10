export default {
    port: process.env.PORT || 8080,
    filesSystem :{
        path:'./DB'
    },
    mongodb:{
        cnxStr:process.env.MONGO_DB||'mongodb://localhost/ecommerce',
        options:{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            serverSelectionTimeoutMS:5000,
        }
    },
    firebase:{
        "type": "service_account",
        "project_id": "backendecommerce-fracaro",
        "private_key_id": "408d005bdb5bcd1a59e2b82bb2fe569c6dd7d338",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCnoEhbeu8RTFY/\naqtkxm5UwRw7J53kuPwyCAY1D4q1uIdQ1UrFLBItW8WR+8QiZS5TRhjRl6iiDQTD\nSf7C7X2KoAV8uzM7yXIGs7Q6WuO8KL0wuoyI/TD2lrU4aTWOEsemTV6O5+zw2HXG\n0DcRnMKda2j4aNsDEaxyf3IeBXqvJt+FxcNI54yxfJ4lmrb/emxD7I41edLzjEKM\nJowZQdh/2PPCqQic5YfPCn1prJG1SYPmHfqgcvz3GGMIRKnFkSLZYAa/1ZbZvN1W\nlyXMXgMF7noNmTCydLOm440kD7D9hLy7ddYyaPSctmx5zGe4ml+m2NaetfixXnc2\nZuj6K0F7AgMBAAECggEADQq4dn2jGhpxX2/CNA4ISYnY03VqoIAQByh+qyQxa6AW\nzyA5OAwMwgCw54HKKc7rgskiZzRAh5MxuqwIKUxnByEaLDE4dD9hIspajGvD6kDV\nL3RkOMhSRe1F3kS5SPuHExZT9BRxZ++/gh9zGWiz76GKwkEOQTffzezCiTlt6TCh\n1DcKGvCJiUQglyu4/CqlNupmpRRXzNcWJP2L0TI+JTmq9+Mm88y/mBte/4WabYu2\ng3Ugb4kxfbdsBljJeW7nWvqtqmja2Alhc7hl1Zsr7DZzUrlozs1jgv6Hza8irmlQ\nf5L7CWOk+tM/RkldLQy6wD9h38mw9Ds/Po5/2FD/IQKBgQDWmI08K4TvseUuYagl\n3r/TVg/A06oeqGaQL/DN/MPHeSiZL4pHtD/1O3mWC33QwnGEpP4iFeMNF6/v8eWI\n0lGgQnbld4UGqhI6a7ZzReCguPjsunIMt2Yo1f8z4AEGKCjlsCS6YOtPZ5+upjVC\n/+DiAseqZ+9ZuBfLpwygSP0wKwKBgQDH98VKA+YHS1GoVSCZEOHjtTMHJRztUXqY\ngBKO1ItamsFqAp8WgyU5+GGawlAxgLf2dbVDmOO6tYpm2UfKvE3HeleAHfcIiQWV\nwisTHxC2OcMEmvX2VTd+mMJ4SEcUlwDSOuNT7hLwcUY7NtDBsdniNFoqf5ilNAHD\nhJ8YmqU78QKBgQCb2yQIpVrhc4SOESM8jfEoHoNGevQ9W/VRl1//Wysd/uL7jsmR\nllo1U8LUtPfl3LLxsZtZSigjZCbF0BvzKT1bdapAsnONCYw/nedfBUtFr9IqrKcU\nkUbDNdkp5fEYdaZuW2Xxb163xvz0rYZVaN39iCNXojD2Knwtzt+esiQhDQKBgE5/\nrnwawa81Ww3otQ5BeVuJY0m3wP5MkQLSq/ZT64ya2biC5O7SdsemALLe+toj/JOM\nq6aomyVNZNJxE2S7vRDErxrFKJe6Km4atgwgks/mJu9k4Y9c7pcM4rKTNQwZJyJg\nKaNl/xtSbE6MezC+X5kUEh1Cz6pymwqkwkvHUXwRAoGALGdt3/8CeC2MS0ClSRv3\ny2VG3IyEzYJhjjSXTNBySVU0JCOXAnkoExva4xTL7nZ2pcLEzhwR4DPz+uP2A3VF\nwQvFzX6dCzdLJmp4Ml5APPswBSUD4YHNDBW8Edc+9COPgri0hQ27Assl6MAVwXU7\n3fgMWCdHbHPkjLLDb3Pd0wY=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-5eyp2@backendecommerce-fracaro.iam.gserviceaccount.com",
        "client_id": "112488916803846823924",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5eyp2%40backendecommerce-fracaro.iam.gserviceaccount.com"
    },
    sqlite3:{
        client: 'sqlite3',
        connection: {
            filename: "./DB/ecommerce.sqlite"
    },
        useNullAsDefault: true
    },
    mariaDB:{
        client: 'mysql',
        connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : '',
        database : 'ecommerce'}
    }
}
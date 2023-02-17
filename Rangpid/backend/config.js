// eslint-disable-next-line import/no-anonymous-default-export
export default {
    DB_URL: process.env.DB_URL || 'mongodb://127.0.0.1:27017/rangpid',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret'
}
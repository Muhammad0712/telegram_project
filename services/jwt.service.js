const config = require('config');
const jwt = require('jsonwebtoken');

class JwtService{
    constructor(accsessKey, refreshKey, accsessTime, refreshTime){
        this.accessKey = accsessKey;
        this.refreshKey = refreshKey,
        this.accessTime = accsessTime;
        this.refreshTime = refreshTime;
    }
    generateTokens(payload){
        const accessToken = jwt.sign(payload, this.accessKey, {
            expiresIn: this.accessTime
        });
        const refreshToken = jwt.sign(payload, this.refreshKey, {
            expiresIn: this.refreshTime
        });
        return {
            accessToken,
            refreshToken
        }
    }
    async verifyAccessToken(token){
        return jwt.verify(token, this.accessKey);
    }
    async verifyRefreshToken(token){
        return jwt.verify(token, this.refreshKey);
    }
}

module.exports = new JwtService(
    config.get("access_key"),
    config.get("refresh_key"),
    config.get("access_time"),
    config.get("refresh_time")
)
const PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/Images"
        ],
        target: "http://www.nicheshack.com/",
        // target: "http://localhost:49699/",
        secure: false,
        "changeOrigin": true
    }
]
module.exports = PROXY_CONFIG;
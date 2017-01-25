'use strict';

module.exports = {
    DEFAULT_AUTH_API_BASE_URL: process.env.CONTAINERSHIP_CLOUD_ENV === 'development' ? 'https://stage-auth.containership.io' : 'https://auth.containership.io',
    DEFAULT_BUILD_API_BASE_URL: process.env.CONTAINERSHIP_CLOUD_ENV === 'development' ? 'https://stage-build.containership.io' : 'https://build.containership.io',
    DEFAULT_CLOUD_API_BASE_URL: process.env.CONTAINERSHIP_CLOUD_ENV === 'development' ? 'https://stage-api.containership.io' : 'https://api.containership.io',
    DEFAULT_CLOUD_REGISTRY_BASE_URL: process.env.CONTAINERSHIP_CLOUD_ENV === 'development' ? 'https://stage-registry.containership.io' : 'https://registry.containership.io'
}

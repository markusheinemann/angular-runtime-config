# Angular Runtime Configuration Project

This project serves as a practical guide on how to implement and utilize Runtime Configuration in Angular applications. It addresses the common pitfalls associated with using Angular's environment configurations for runtime settings and provides a robust solution for managing environment-specific configurations without the need for multiple build artifacts.

## A Word on Environments

Angular provides a way to use different environment configurations which are replaced during build time. However, as mentioned in the Angular documentation, this feature should primarily be used to provide different build configurations. It is considered a bad practice to use Angular environments for runtime-related configurations, such as API endpoints. Here's why:

- Using Angular environments for runtime configuration means each deployment stage (e.g., test, QA, production) requires a separate build artifact.
- It's not possible to adhere to the principle of "build once, run everywhere."

## Docker Volumes

- In this example the current runtime configuration is placed at `assets/config.json`.
- All availible available are stored at `config`

To run the application using docker build the provided docker image:

```
docker build -t angular-runtime-configuration .
```

When running the docker image just mount the desired configuration into the container:

```
# Local configuration
docker run -d -p 80:80 -v $(pwd)/config/local.json:/usr/share/nginx/html/assets/config.json angular-runtime-configuration
# Production configuration
docker run -d -p 80:80 -v $(pwd)/config/prod.json:/usr/share/nginx/html/assets/config.json angular-runtime-configuration
```

# Steps to reproduce

### 1. Install dependencies

```sh
yarn
```

### 2. Run Nuxt

```sh
yarn dev
```

### 3. Open your browser

Open http://localhost:3000 in your favorite browser.

This step is mandatory as the app needs to be open in the browser to reproduce the issue.

### 4. Spam save `plugins/foo.ts`

Go in `plugins/foo.ts` in your favorite editor and spam save the file to trigger hot reload fast.

### 5. Issue

You should ends up with Nuxt crashing with the following error :

![image](https://user-images.githubusercontent.com/25272043/159538872-6b231ec9-5a8a-4d93-a745-70e80677681d.png)

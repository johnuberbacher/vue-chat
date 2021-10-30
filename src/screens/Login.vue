<template>
  <div class="grid md:grid-cols-2 gap-0 bg-white dark:bg-gray-900">
    <div class="p-10 flex justify-items-center items-center h-screen">
      <div class="max-w-xl2 mx-auto">
        <div>
          <h2
            class="
              mt-6
              mb-8
              text-center text-6xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Welcome to <span class="text-green-600">Vue</span> Chat
          </h2>
          <p
            class="
              text-center text-sm text-gray-600
              dark:text-gray-300
              font-medium
              mb-10
            "
          >
            Built with Vue.JS, TailwindCSS and Firebase 
          </p>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="flex justify-center w-full px-3">
              <button
                v-if="isLogin"
                @click="signOut"
                class="
                  shadow
                  bg-green-600
                  hover:bg-green-500
                  focus:bg-green-700 focus:shadow-outline focus:outline-none
                  text-white
                  font-bold
                  py-2
                  px-6
                  rounded
                "
                type="submit"
              >
                Sign Out
              </button>
              <div class="flex align-center items-center flex-col lg:flex-row" v-else>
                <button
                  @click="signIn"
                  class="
                    shadow
                    bg-green-600
                    hover:bg-green-500
                    focus:bg-green-700 focus:shadow-outline focus:outline-none
                    text-white
                    font-bold
                    py-2
                    px-6
                    m-2
                    rounded
                  "
                  type="submit"
                >
                  Sign In with Google
                </button>
                <button
                  @click="signInWithGitHub"
                  class="
                    shadow
                    bg-gray-800
                    hover:bg-gray-600
                    focus:bg-gray-900 focus:shadow-outline focus:outline-none
                    text-white
                    font-bold
                    py-2
                    px-6
                    m-2
                    rounded
                  "
                  type="submit"
                >
                  Sign In with GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        invisible
        md:visible
        w-full
        object-cover
        lg:h-screen
        md:w-full
        bg-cover bg-center
      "
      style="background-image: url(https://i.imgur.com/3tbKfvx.jpg)"
    ></div>
  </div>
</template>

<script>
import { useAuth } from "../Firebase";
export default {
  name: "Login",
  setup() {
    const { user, isLogin, signOut, signIn, signInWithGitHub } = useAuth();
    return { user, isLogin, signOut, signIn, signInWithGitHub };
  },
};
</script>

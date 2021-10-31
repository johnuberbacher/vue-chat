<template>
  <div class="grid bg-gray-100 dark:bg-gray-900">
    <form
      v-if="isLogin"
      @submit.prevent="send"
      class="p-5 lg:p-10 flex justify-items-center items-stretch h-screen"
    >
      <div
        class="
          w-full
          max-w-3xl
          bg-white
          dark:bg-gray-800
          mx-auto
          shadow-xl
          p-5
          md:p-10
          rounded-xl
        "
      >
        <div class="h-full flex flex-col">
          <div class="flex flex-row mb-5">
            <button
              type="button"
              v-if="isLogin"
              @click="signOut"
              class="
                text-xs
                shadow
                border-2 border-green-600
                bg-transparent
                dark:bg-gray-900
                hover:bg-green-600 hover:text-white
                focus:text-white
                text-green-600
                focus:bg-green-700 focus:shadow-outline focus:outline-none
                font-bold
                py-1
                px-4
                rounded
              "
            >
              Sign Out
            </button>
          </div>
          <div
            class="
              pb-5
              px-5
              bg-gray-50
              dark:bg-gray-900
              rounded-lg
              border
              dark:border-gray-700
              flex flex-col
              items-start
              justify-start
              overflow-y-auto
              h-full
            "
          >
            <Message
              v-for="{
                id,
                text,
                userName,
                photoUrl,
                userId,
                createdAt,
              } in messages"
              :key="id"
              :userName="userName"
              :photoUrl="photoUrl"
              :createdAt="createdAt"
              :sender="userId === user?.uid"
            >
              {{ text }}
            </Message>
            <div ref="scrollview"></div>
          </div>
          <div class="flex flex-wrap -mx-3 mt-5">
            <div class="flex justify-center w-full px-3">
              <input
                v-model="message"
                type="text"
                class="
                  block
                  w-full
                  px-5
                  py-2
                  text-sm
                  border border-gray-300
                  rounded-lg
                  dark:text-white dark:bg-gray-900 dark:border-gray-700
                  focus:ring-green-500 focus:border-green-500
                "
                required
                placeholder="send a message..."
              />
              <button
                class="
                  shadow
                  bg-green-600
                  hover:bg-green-500
                  focus:bg-green-700 focus:shadow-outline focus:outline-none
                  text-white
                  font-bold
                  ml-5
                  py-2
                  px-6
                  rounded
                "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, watch, nextTick } from "vue";
import { useAuth, useChat } from "../Firebase";
import Message from "../components/Message.vue";
const messageAudio = require("../assets/sfx/pop.mp3");

export default {
  name: "Chat",
  components: { Message },
  setup() {
    const { user, isLogin, signOut } = useAuth();
    const { messages, sendMessage } = useChat();
    const scrollview = ref(null);
    watch(
      messages,
      () => {
        nextTick(() => {
          var audio = new Audio(messageAudio); // path to file
          audio.play();
          scrollview.value?.scrollIntoView({ behavior: "smooth" });
        });
      },
      { deep: true }
    );
    const message = ref("");
    const send = () => {
      sendMessage(message.value);
      message.value = "";
    };
    return { user, isLogin, messages, scrollview, message, send, signOut };
  },
};
</script>

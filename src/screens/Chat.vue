<template>
  <div class="grid bg-gray-100">
    <form v-if="isLogin" @submit.prevent="send" class="p-5 lg:p-10 flex justify-items-center items-stretch h-screen">
      <div
        class="
          w-full
          max-w-3xl
          bg-white
          mx-auto
          shadow-xl
          p-5
          md:p-10
          rounded-xl
        "
      >
        <div class="h-full flex flex-col">
          <div
            class="
              p-5
              bg-gray-50
              rounded-xl
              border
              flex flex-col
              items-start
              justify-end
              overflow-y-auto
              h-full
            "
          >
            <Message v-for="{id, userName} in messages" :key="id" :userName="userName" :sender="userID === user?.uid"></Message>
          </div>
          <div class="flex flex-wrap -mx-3 mt-5">
            <div class="flex justify-center w-full px-3">
              <input
                v-model="message"
                type="text"
                name="userInput"
                id="userInput"
                class="
                  block
                  w-full
                  px-5
                  py-2
                  sm:text-sm
                  border border-gray-300
                  rounded-xl
                  focus:ring-indigo-500 focus:border-blue-500
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
import Message from '../components/Message.vue'
export default {
  name: "Chat",
  components: { Message },
  setup() {
    const { user, isLogin } = useAuth();
    const { messages, sendMessage } = useChat();
    const bottom = ref(null);
    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: "smooth" });
        });
      },
      { deep: true }
    );
    const message = ref("");
    const send = () => {
      sendMessage(message.value);
      message.value = "";
    };
    return { user, isLogin, messages, bottom, message, send };
  },
};
</script>

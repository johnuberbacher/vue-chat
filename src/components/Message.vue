<template>
  <div class="flex flex-row mt-5 flex-start max-w-3/4" v-if="sender == false">
    <div
      class="
        rounded-full
        mr-5
        w-10
        h-10
        mt-4
        bg-cover 
        bg-center 
        bg-no-repeat
        border-2 border-green-600
      "
      :style="{ minWidth: '2.5rem', minHeight: '2.5rem', backgroundImage: 'url(' + photoUrl + ')' }"
    ></div>
    <div class="flex flex-col items-start">
      <div
        class="
          cursor-default
          text-xs text-gray-400
          dark:text-gray-500
          font-medium
          pb-1
        "
      >
        {{ userName }}
      </div>
      <div
        class="
          cursor-default
          text-sm text-gray-600
          dark:text-white
          bg-white
          dark:bg-gray-800
          font-medium
          shadow
          rounded-xl
          py-3
          px-4
          inline-block
        "
      >
        <slot />
      </div>
    </div>
  </div>
  <div class="flex flex-row mt-5 self-end max-w-3/4" v-else>
    <div class="flex flex-col items-end">
      <div
        class="
          cursor-default
          text-xs text-gray-400
          dark:text-gray-500
          font-medium
          pb-1
        "
      >
      </div>
      <div
        class="
          cursor-default
          text-sm text-white
          bg-green-600
          font-medium
          shadow
          rounded-xl
          py-3
          px-4
          inline-block
        "
      >
        <slot />
      </div>
    </div>
    <div
      class="
        rounded-full
        ml-5
        w-10
        h-10
        mt-2
        bg-cover 
        bg-center 
        bg-no-repeat
        border-2 border-green-600
      "
      :style="{ minWidth: '2.5rem', minHeight: '2.5rem', backgroundImage: 'url(' + photoUrl + ')' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    userName: { type: String, default: "" },
    createdAt: { type: String, default: "" },
    photoUrl: { type: String, default: "" },
    sender: { type: Boolean, default: false },
  },
  methods: {
      
  }
};
</script>

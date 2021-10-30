<template>
  <div class="flex flex-row mt-5" v-if="sender == false">
    <div
      class="
        rounded-full
        mr-5
        w-10
        h-10
        mt-4
        bg-cover
        border-2 border-green-600
      "
      :style="{ backgroundImage: 'url(' + photoUrl + ')' }"
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
          bg-white
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
  <div class="flex flex-row mt-5 self-end" v-else>
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
        {{ userName }}
      </div>
      <div
        class="
          cursor-default
          text-sm text-gray-600
          bg-white
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
      v-if="photoUrl"
      class="
        rounded-full
        ml-5
        w-10
        h-10
        mt-4
        bg-cover
        border-2 border-green-600
      "
      :style="{ backgroundImage: 'url(' + photoUrl + ')' }"
    ></div>
    <div
      else
      class="
        rounded-full
        ml-5
        w-10
        h-10
        mt-4
        bg-cover
        border-2 border-green-600
      "
      style="background-image: url('https://avatars.githubusercontent.com/u/5966499?v=4');
      "
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    userName: { type: String, default: "" },
    photoUrl: { type: String, default: "" },
    sender: { type: Boolean, default: false },
  },
};
</script>

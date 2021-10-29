<template>
  <div
    class="
      text-sm text-gray-600
      font-medium
      mt-4
      shadow
      rounded-xl
      py-3
      px-4
      inline-block
    "
    v-bind:class="{ 'bg-blue-600': sender==true, 'bg-white': sender!=true }"
  >
  <slot />
  </div>
</template>

<script>
export default {
  props: {
    userName: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
};
</script>

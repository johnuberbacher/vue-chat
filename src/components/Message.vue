<template>
  <div
    class="
      text-sm text-gray-600
      font-medium
      mt-4
      bg-white
      shadow
      rounded-xl
      py-3
      px-4
      inline-block
    "
  >
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    userName: { type: String, default: '' },
    text: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
};
</script>

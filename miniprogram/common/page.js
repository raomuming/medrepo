export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: '医学资料集'
      };
    },
    ...options
  });
}
// 11. PubSub helper to publish and subscribe results
// using CustomEvents mechanism

const PubSub = {
  // 12. publish method takes 2 arguments
  // channel - name of channel we publish on
  // payload - the data we want to publish
  publish: function (channel, payload) {
    console.log(`published on channel: ${channel}, payload: ${payload}`); // debugger
// 13. create a custom event takes data we want to send
    const event = new CustomEvent(channel, {
      detail: payload
    });
// 14. dispatches the event
    document.dispatchEvent(event);
  },
  // 15. subscribe takes the name of the the channel custom event
  // adds an event listener - check class notes SUBSCRIBE
  subscribe: function (channel, callback) {
    console.log(`subscribed to channel: ${channel}`); // debugger
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;

// 16. Start calling views for publishing

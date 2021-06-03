// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

//= require jquery3
//= require popper
//= require bootstrap


Rails.ajax({
    url: "/tokens",
    type: "POST",
    success: function(data) {
      Twilio.Chat.Client
      .create(data.token)
      .then(function(chatClient) {
        chatClient.getChannelByUniqueName("general")
          .then(function(channel){
            // general channel exists
          })
          .catch(function(){
            chatClient.createChannel({
              uniqueName: "general",
              friendlyName: "General Chat Channel"
            }).then(function(channel) {
              if (channel.state.status !== "joined") {
                channel.join().then(function(channel) {
                  console.log("Joined General Channel");
                })
              }
            });
          })
        });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".chat")) {
      window.chat = new Chat();
    }
  });
$.fn.extend({
    slackNews: function(token, channel) {
      div = this;
      html = '';
      $.ajax({
        url: "https://slack.com/api/channels.history",
        data: "token=" + token + "&channel=" + channel
      }).then(function(data) {
        $.each(data.messages, function(i, message) {
          //clear all <>
          msg = message.text.replace(/&lt;|&gt;/g,'');
          //replace all [] by <>
          msg = msg.replace(/\[/g, '<').replace(/\]/g, '>');

          //the first line is the title, the nexts are the body
          arr = msg.split("\n");
          sMessage = arr.splice(0,1);
          sMessage.push(arr.join('<br>'));
          title = sMessage[0];
          body = sMessage[1];

          d = new Date(message.ts * 1000);
          date = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

          html += "<article class=\"slack-news\">";
          html += "<h4>" + title + "</h4>";
          html += "<time>" + date + "</time>";
          html += "<p>" + body + "</p>";
          html += "</article>";
        });
        $(div).html(html);
      });
    }
});

function nRules(api, args) {
    this.moduleData = args[0];
    this.moduleConfig = args[1];
    this.moduleConfig.Msgs = this.moduleConfig.Msgs || {
        "title": "Server Title Rules",
    }
    this.moduleConfig.Rules = this.moduleconfig.Rules || ["No Running", "No Gum", "No Cellphones"];
    command.AddChatCommand("rules", api, "showRules");
}

Rules.prototype = {
    showRules: function(player, cmd, args) {
        player.ChatMessage(this.moduleConfig.Msgs.title);
        player.ChatMessage("-----------------------------------------");
        for (var i = 0, len = this.moduleConfig.Rules.length; i < len; i++) {
            player.ChatMessage("- " + this.moduleConfig.Rules[i]);
        }
        player.ChatMessage("-----------------------------------------");
    }
};

var Rules = {
    Title: "Rules",
    Author: "Killparadise",
    Version: V(1, 0, 0),
    Init: function() {
    print("Rules Installed. Please Reload ParaAPI");

  }
}

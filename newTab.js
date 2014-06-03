$( document ).ready(function() {
	$.each($(".leaguePlayerOuter"), function (index, value){
		var teamId = $(value).attr("team_id");		
		var ownerNamediv = $(value).children(".leaguePlayerOwner");		
		var ownerName = ownerNamediv.children("p").html();
		if(teamId) {
			var url = "https://fantasy.iplt20.com/ifl/homepage/homepage/" + teamId;
			ownerNamediv.html("<a calss='newTab' href='"+url+"'>"+ownerName+"</a>")
		}
	});
});
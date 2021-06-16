import pandas as pd
import requests
import json
import urllib.request

# Competition names and IDs


def getCompetitions():
    url = "https://api.sofascore.com/api/v1/config/unique-tournaments/ES/football"
    req = urllib.request.Request(url, data=None, headers={
                                 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'})
    data = urllib.request.urlopen(req).read()
    tournaments_dict = json.loads(data)

    tournamentNames = []
    tournamentIDs = []
    tournamentNames = [0 for i in range(
        len(tournaments_dict['uniqueTournaments']))]
    tournamentIDs = [0 for i in range(
        len(tournaments_dict['uniqueTournaments']))]

    for i in range(len(tournaments_dict['uniqueTournaments'])):
        tournamentIDs[i] = tournaments_dict['uniqueTournaments'][i]['id']
        tournamentNames[i] = tournaments_dict['uniqueTournaments'][i]['slug']
    pass
    return tournamentNames, tournamentIDs
# Player names and IDs


def getPlayers(teamIDs, tournamentIDs):
    teamIDs
    tournamentIDs = str(tournamentIDs)
    for j in range(len(teamIDs)):
        print(str(teamIDs[j]))
        url = "https://api.sofascore.com/api/v1/team/" + str(teamIDs[j]) +"/unique-tournament/" + tournamentIDs + "/season/32501/top-players/overall"
        req = urllib.request.Request(url, data=None, headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'})
        data = urllib.request.urlopen(req).read()
        players_dict = json.loads(data)

        for i in range(len(players_dict['topPlayers']['rating'])):
            playerIDs = players_dict['topPlayers']['rating'][i]['player']['id']
            playerNames = players_dict['topPlayers']['rating'][i]['player']['slug']
            print(playerNames,playerIDs)
        pass
    pass
    return playerNames, playerIDs


# Team names and IDs

# def getTeams(TournamentID):
#     url = "https://api.sofascore.com/api/v1/team/2836/unique-tournament/8/season/32501/top-players/overall"
#     req = urllib.request.Request(url, data=None, headers={
#         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'})
#     data = urllib.request.urlopen(req).read()
#     teams_dict = json.loads(data)

#     for i in range(len(teams_dict['tournamentTeamEvents'][0])):
#         teamIDs = teams_dict['tournamentTeamEvents'][0][i]
#         teamNames = teams_dict['tournamentTeamEvents'][0][i]['awayTeam']['slug']
#         print(teamNames, teamIDs)
#         pass
#     pass

def getTeams(tournamentID):
    tournamentID = str(tournamentID)
    url = "https://api.sofascore.com/api/v1/tournament/" + \
        tournamentID + "/season/32501/team-events/total"
    req = urllib.request.Request(url, data=None, headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'})
    data = urllib.request.urlopen(req).read()
    teamID_dict = json.loads(data)
    teamIDs = list(teamID_dict['teamEvents'].keys())
    teamName = []
    teamID = []
    teamName = [0 for i in range(len(teamIDs))]
    teamID = [0 for i in range(len(teamIDs))]
    for i in range(len(teamIDs)):
        team = teamID_dict['teamEvents'].pop(teamIDs[i])
        if team[0]['awayTeam']['id'] == int(teamIDs[i]):
            teamName[i] = team[0]['awayTeam']['slug']
            teamID[i] = int(teamIDs[i])
            pass
        else:
            teamName[i] = team[0]['homeTeam']['slug']
            teamID[i] = int(teamIDs[i])
            pass
    pass
    return teamID


# print(getCompetitions())
print(getPlayers(getTeams(36),8))

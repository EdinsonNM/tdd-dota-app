const {build, fake, sequence, arrayOf} = require("test-data-bot");

export const PlayerBuilder = build("Player").fields({
    tracked_until: null,
    solo_competitive_rank: fake((f) => f.random.number()),
    profile: {
        account_id: fake((f) => f.random.number()),
        personaname: fake((f) => f.name.findName()),
        name: null,
        plus: true,
        cheese: 0,
        steamid: fake((f) => f.random.number()),
        avatar: fake((f) => f.image.avatar()),
        avatarmedium: fake((f) => f.image.avatar()),
        avatarfull: fake((f) => f.image.avatar()),
        profileurl: "https://steamcommunity.com/id/test/",
        last_login: "2020-03-21T00:46:37.960Z",
        loccountrycode: "PE",
        is_contributor: false,
    },
    competitive_rank: fake((f) => f.random.number()),
    rank_tier: fake((f) => f.random.number()),
    leaderboard_rank: null,
    mmr_estimate: {
        estimate: fake((f) => f.random.number()),
    },
});

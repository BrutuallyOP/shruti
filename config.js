// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Shruti 💖", // first names should be in Title Case

    // The title that appears in the browser tab
    pageTitle: "Hey Shruti… Will You Be My Valentine? 💝🌹",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '💕', '💞'],
        bears: ['🧸', '🐻', '🐻‍❄️'],
        cats: ['🐱', '🐈', '🐈‍⬛', '😻', '😽', '🐾'],
        sparkles: ['✨', '🌟', '💫']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me… or do you LOVE me? 🥺💖",
            yesBtn: "I LOVE YOU 😍",
            noBtn: "I’m shy 🙈",
            secretAnswer: "I don't like you, I love you! ❤️💍"
        },

        second: {
            text: "How much do you love me? 💕",
            startText: "I love you thissss much 😘",
            nextBtn: "Next 💖➡️"
        },

        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹💘",
            yesBtn: "YES BABY ❤️🥰",
            noBtn: "I can’t say no 😭💖"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "OKAY WOW 😭❤️ THAT’S TRUE LOVE 🥰🚀💝",
        high: "To infinity, the moon, and back 🌙🚀💖",
        normal: "More than words can say 💕"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "SHE SAID YES!!! 🎉💖🥰💍",
        message: "You just made me the happiest person alive. Come here… hug first 🤗 then kisses 😘💋",
        emojis: "🎉💖💝💍🌹🧸🐱😻🤗💋❤️💕✨"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ff9a9e",
        backgroundEnd: "#fad0c4",
        buttonBackground: "#ff4d6d",
        buttonHover: "#ff758f",
        textColor: "#c9184a"
    },

    // Animation settings
    animations: {
        floatDuration: "14s",
        floatDistance: "60px",
        bounceSpeed: "0.45s",
        heartExplosionSize: 1.8
    },

    // Background Music
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Our Song",
        stopText: "🔇 Pause Love Music",
        volume: 0.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;

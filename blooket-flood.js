/*
Following code does not work, Ben Stewart updated it so that webpack is useless now
*/
(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/floodGame.js")?.answers?.[0]}`)).then(async x => {
        if (1678659460220 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.prompt = i.contentWindow.prompt.bind(window);
            i.remove();
            
            const id = prompt("Game ID:");
            const name = prompt("Name:");
            const amount = parseInt(prompt("Amount:"));
            
            let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
            const axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a;
            const firebase = Object.values(webpack.c).find(x => x.exports?.a?.initializeApp).exports.a;
            
            for (let i = 1; i <= amount; i++) {
                (async () => {
                    const { data: { success, fbToken, fbShardURL } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: `${name}${i}` });
                    if (!success) return;
                    const liveApp = firebase.initializeApp({
                        apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                        authDomain: "blooket-2020.firebaseapp.com",
                        projectId: "blooket-2020",
                        storageBucket: "blooket-2020.appspot.com",
                        messagingSenderId: "741533559105",
                        appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                        measurementId: "G-S3H5NGN10Z",
                        databaseURL: fbShardURL
                    }, `${name}${i}`);
                    const auth = firebase.auth(liveApp);
                    await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
                    await auth.signInWithCustomToken(fbToken).catch(console.error);
                    await liveApp.database().ref(`${id}/c/${name}${i}`).set({ b: "Black" });
                    liveApp.delete();
                })();
                await new Promise(r => setTimeout(r, 100));
            }
        }
    });
})();
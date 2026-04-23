const isOverlay = window.location.pathname.startsWith("/overlay");

if (isOverlay) {
    if (window.location.pathname === "/overlay/alert") {
        document.getElementById("indicator").style.display = "flex";
    }
} else {
    document.getElementById("default").style.display = "flex";

    // window.$crisp = [];
    // window.CRISP_WEBSITE_ID = "#";
    // const script = document.createElement("script");
    // script.src = "https://client.crisp.chat/l.js";
    // script.async = 1;
    // document.getElementsByTagName("head")[0].appendChild(script);
}

if (document.body.dataset.autoreload === "false" && !isOverlay) {
    console.log("Auto-reload is disabled");
} else {
    console.log("Auto-reload started");

    setInterval(async () => {
        const response = await fetch(window.location.href, {
            method: "GET",
            cache: "no-store",
        });

        if (!response.ok) {
            console.log("Server is down, not reloading");
        } else {
            window.location.reload();
        }
    }, 15 * 1000);
}

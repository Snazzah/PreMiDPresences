let elapsed = Math.floor(Date.now() / 1000),
  prevUrl = document.location.href,
  oldLang = "en";

const presence = new Presence({
    clientId: "802958789555781663"
  }),
  getElement = (query: string): string | undefined => {
    return document.querySelector(query)?.textContent;
  },
  getStrings = async () => {
    return presence.getStrings(
      {
        play: "general.playing",
        pause: "general.paused",
        live: "general.live",
        browse: "general.browsing",
        viewPage: "general.viewPage",
        home: "twitch.home",
        download: "twitch.downloads",
        jobs: "twitch.jobs",
        turbo: "twitch.turbo",
        partners: "twitch.partners",
        press: "twitch.press",
        security: "twitch.security",
        access: "twitch.access",
        ads: "twitch.ads",
        guidelines: "twitch.guidelines",
        terms: "general.terms",
        privacy: "general.privacy",
        cookie: "general.cookie",
        watchingLive: "general.watchingLive",
        watchingVid: "general.watchingVid",
        viewProfile: "general.viewProfile",
        viewCategory: "general.viewCategory",
        viewWallet: "twitch.wallet",
        viewEsports: "twitch.esports",
        viewFollow: "twitch.viewFollow",
        viewTeam: "twitch.viewTeam",
        viewDropsInv: "twitch.viewDropsInv",
        viewDropsComp: "twitch.viewDropsComp",
        viewing: "general.viewing",
        searchingFor: "general.searchFor",
        searchingSomething: "general.searchSomething",
        viewSettings: "twitch.viewSettings",
        viewFriends: "twitch.viewFriends",
        subs: "twitch.subs",
        squad: "twitch.squad",
        modStreamer: "twitch.modStreamer",
        readingAbout: "general.readingAbout",
        redeem: "twitch.redeem",
        camp: "twitch.camp",
        campBasic: "twitch.campBasic",
        campSetup: "twitch.campSetup",
        campLevel: "twitch.campLevel",
        campConnect: "twitch.campConnect",
        campReward: "twitch.campReward",
        campMusic: "twitch.campMusic",
        campLive: "twitch.campLive",
        dashboard: "twitch.dashboard",
        dashboardManage: "twitch.dashboardManage",
        manageRoles: "twitch.manageRoles",
        produce: "twitch.produce",
        viewTheir: "twitch.viewTheir",
        channelAnaly: "twitch.channelAnaly",
        streamSum: "twitch.streamSum",
        achievements: "twitch.achievements",
        activity: "twitch.activity",
        followList: "twitch.followList",
        colls: "twitch.colls",
        clips: "twitch.clips",
        channelSettings: "twitch.channelSettings",
        moderationSettings: "twitch.moderationSettings",
        dropsSettings: "twitch.dropsSettings",
        tools: "twitch.tools",
        extensions: "twitch.extensions",
        brand: "twitch.brand",
        brandReal: "twitch.brandReal",
        brandMadness: "twitch.brandMadness",
        brandExpression: "twitch.brandExpression",
        brandTogether: "twitch.brandTogether",
        brandWatch: "twitch.brandWatch",
        blogArchive: "twitch.blogArchive",
        readingArticle: "general.readingArticle",
        blogBrowse: "twitch.blogBrowse",
        blogs: "twitch.blogs",
        help: "twitch.help",
        helpTopic: "twitch.helpTopic",
        helpTopicCatalog: "twitch.helpTopicCatalog",
        affiliate: "twitch.affiliate",
        dev: "twitch.dev",
        devProduct: "twitch.devProduct",
        devShowcase: "twitch.devShowcase",
        devSupport: "twitch.devSupport",
        devDocs: "twitch.devDocs",
        incident: "general.incidentHistory",
        uptime: "general.uptimeHistory",
        forums: "general.forums",
        thread: "general.readingThread",
        user: "general.viewUser",
        watchStream: "general.buttonWatchStream",
        watchVideo: "general.buttonWatchVideo"
      },
      oldLang
    );
  },
  devLogoArr = ["dev-main", "dev-white", "dev-purple"],
  logoArr = ["twitch", "black-ops", "white", "purple", "pride"];

let strings: Awaited<ReturnType<typeof getStrings>>;

presence.on("UpdateData", async () => {
  const path = location.pathname.replace(/\/?$/, "/"),
    [
      showBrowsing,
      showLive,
      showVideo,
      showTimestamps,
      newLang,
      privacy,
      vidDetail,
      vidState,
      streamDetail,
      streamState,
      pfp,
      logo,
      devLogo,
      buttons
    ] = await Promise.all([
      presence.getSetting<boolean>("browse"),
      presence.getSetting<boolean>("live"),
      presence.getSetting<boolean>("video"),
      presence.getSetting<boolean>("timestamp"),
      presence.getSetting<string>("lang").catch(() => "en"),
      presence.getSetting<boolean>("privacy"),
      presence.getSetting<string>("vidDetail"),
      presence.getSetting<string>("vidState"),
      presence.getSetting<string>("streamDetail"),
      presence.getSetting<string>("streamState"),
      presence.getSetting<boolean>("profilePic"),
      presence.getSetting<number>("logo"),
      presence.getSetting<number>("devLogo"),
      presence.getSetting<boolean>("buttons")
    ]);

  if (oldLang !== newLang || !strings) {
    oldLang = newLang;
    strings = await getStrings();
  }

  let presenceData: PresenceData = {
    largeImageKey: logoArr[logo] || "twitch",
    startTimestamp: elapsed
  };

  if (document.location.href !== prevUrl) {
    prevUrl = document.location.href;
    elapsed = Math.floor(Date.now() / 1000);
  }

  if (document.location.hostname === "www.twitch.tv") {
    //* Main website
    const statics = {
      "/downloads/": {
        details: strings.viewPage,
        state: strings.download
      },
      "/jobs/": {
        details: strings.viewPage,
        state: strings.jobs
      },
      "/turbo/": {
        details: strings.viewPage,
        state: strings.turbo
      },
      "/broadcast/studio/": {
        details: strings.readingAbout,
        state: "Twitch Studio"
      },
      "/redeem/": {
        details: strings.redeem
      },
      "/p/partners/": {
        details: strings.viewPage,
        state: strings.partners
      },
      "/p/press-center/": {
        details: strings.viewPage,
        state: strings.press
      },
      "/p/security/": {
        details: strings.viewPage,
        state: strings.security
      },
      "/p/legal/accessibility/": {
        details: strings.viewPage,
        state: strings.access
      },
      "/p/legal/ad-choices/": {
        details: strings.viewPage,
        state: strings.ads
      },
      "/p/legal/community-guidelines/": {
        details: strings.viewPage,
        state: strings.guidelines
      },
      "/p/legal/cookie-policy/": {
        details: strings.viewPage,
        state: strings.cookie
      },
      "/p/legal/privacy-notice/": {
        details: strings.viewPage,
        state: strings.privacy
      },
      "/p/legal/terms-of-serice/": {
        details: strings.viewPage,
        state: strings.terms
      },
      "/p/(\\w*|\\w*-\\w*)/about/": {
        details: strings.readingAbout,
        state: "Twitch"
      },
      "/p/(\\w*|\\w*-\\w*)/stream/": {
        details: strings.readingAbout,
        state: "How to stream"
      },
      "/p/(\\w*|\\w*-\\w*)/watch/": {
        details: strings.readingAbout,
        state: "How to watch"
      },
      "/p/(\\w*|\\w*-\\w*)/company/": {
        details: strings.readingAbout,
        state: "The Company"
      },
      "/p/(\\w*|\\w*-\\w*)/giftcard/": {
        details: strings.readingAbout,
        state: "Giftcards"
      },
      "/p/(\\w*|\\w*-\\w*)/artists/": {
        details: strings.readingAbout,
        state: "Artists"
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/learn-the-basics/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.campBasic
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/setting-up-your-stream/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.campSetup
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/level-up/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.campLevel
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/connect-and-engage/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.campConnect
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/get-rewarded/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.campReward
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/twitch-music-getting-started/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.campMusic
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/live/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.campLive
      },
      "/creatorcamp/(\\w*|\\w*-\\w*)/": {
        details: `${strings.camp} | ${strings.viewPage}`,
        state: strings.home
      }
    };

    if (showBrowsing) {
      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (path === "/") {
        presenceData.details = strings.browse;
        presenceData.state = strings.home;
      }

      let user = getElement(".home-header-sticky .tw-title");
      if (user) {
        const tab = getElement(".tw-c-text-link"),
          profilePic = document
            .querySelector<HTMLImageElement>(
              ".tw-halo > .tw-aspect > .tw-avatar > .tw-image-avatar"
            )
            .src.replace("profile_image-70x70", "profile_image-600x600");
        user += tab ? ` (${tab})` : "";

        presenceData.details = strings.viewProfile;
        presenceData.state = user;
        if (pfp) {
          presenceData.largeImageKey =
            profilePic ?? (logoArr[logo] || "twitch");
        }
      }

      if (path.includes("/team/")) {
        presenceData.details = strings.viewTeam;
        presenceData.state = document.location.pathname
          .split("/")
          .pop()
          .split("_")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      if (path.includes("/settings/")) {
        presenceData.details = strings.viewSettings;
        presenceData.state = getElement(".tw-tab__link--active");
      }

      if (path.includes("/friends/")) {
        const tab = getElement(".tw-tab__link--active");

        presenceData.details = strings.viewFriends;
        presenceData.state = tab;
      }

      let searching = false;
      if (path.includes("/search/")) {
        searching = true;

        presenceData.details = strings.searchingFor;
        presenceData.state = getElement(".tw-combo-input__input > div > input");
        presenceData.smallImageKey = "search";
      }

      if (path.includes("/drops/inventory/"))
        presenceData.details = strings.viewDropsInv;

      if (path.includes("/drops/campaigns/")) {
        presenceData.details = strings.viewDropsComp;

        let activeDrop = null;
        for (const drop of document.querySelector(
          ".drops-root__content > div:nth-child(5)"
        ).children) {
          if (!drop.children[1].className.includes("tw-hide"))
            activeDrop = `${drop.firstElementChild.firstElementChild.firstElementChild.children[1].firstElementChild.children[0].textContent} (${drop.firstElementChild.firstElementChild.firstElementChild.children[1].firstElementChild.children[1].textContent})`;
        }

        if (activeDrop) presenceData.state = activeDrop;
      }

      if (path.includes("/subscriptions/")) {
        const tab = getElement(".tw-tab__link--active");

        presenceData.details = strings.subs;
        if (!tab.includes("Your"))
          presenceData.state = tab.replace("Subscriptions", "");
      }

      if (path.includes("/wallet/")) {
        const tab = getElement(".tw-c-text-link");

        presenceData.details = strings.viewWallet;
        if (!tab.includes("Wallet")) presenceData.state = tab;
      }

      if (path.includes("/directory/")) {
        const tab = getElement(".tw-c-text-link");

        presenceData.details = strings.browse;
        presenceData.state = tab;
      }

      if (path.includes("/directory/game/")) {
        const category = getElement(".directory-header-new__banner-cover h1"),
          tab = getElement(".tw-c-text-link");

        presenceData.details = strings.viewCategory;
        presenceData.state = category && `${category} (${tab})`;
      }

      if (path.includes("/directory/esports/")) {
        presenceData.details = strings.viewEsports;
        presenceData.state = getElement(
          ".esports-directory-single-category-header__info p"
        );
      }

      if (path.includes("/directory/following/")) {
        const tab = getElement(".tw-c-text-link");

        presenceData.details = strings.viewFollow;
        if (!tab.includes("Overview")) presenceData.state = tab;
      }

      if (privacy && searching) {
        presenceData.details = strings.searchingSomething;
        delete presenceData.state;
      } else if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }

    if (path.includes("/squad/")) {
      const squad = document.querySelectorAll(".squad-stream-channel-card a"),
        squadNames: string[] = [];

      squad.forEach(squadUser => {
        squadNames.push(squadUser.textContent);
      });

      presenceData.details = strings.squad;
      presenceData.state = squadNames.join(", ");
      presenceData.smallImageKey = "live";
      presenceData.smallImageText = strings.live;
    }

    if (path.includes("/moderator/")) {
      const user = getElement(".stream-info-card p > a");

      presenceData.details = strings.modStreamer;
      presenceData.state = user;

      if (getElement(".modview-dock-widget p") !== "Offline") {
        presenceData.smallImageKey = "live";
        presenceData.smallImageText = strings.live;
      }
    }

    const video = document.querySelector<HTMLVideoElement>("video");
    if (
      !document.querySelector<HTMLDivElement>(".home-carousel-info") &&
      document.querySelector<HTMLDivElement>(".channel-root") &&
      video
    ) {
      const live = video.duration >= 1073741824;

      if (showLive && live) {
        //* Live
        const title = getElement(".channel-info-content h2"),
          streamer = getElement(".channel-info-content h1"),
          game =
            getElement("a[data-a-target='stream-game-link']") ||
            "Just Chatting",
          profilePic = document
            .querySelector<HTMLImageElement>(
              ".tw-halo > .tw-aspect > .tw-avatar > .tw-image-avatar"
            )
            .src.replace("profile_image-70x70", "profile_image-600x600");
        if (title && streamer) {
          presenceData.details = streamDetail
            .replace("%title%", title)
            .replace("%streamer%", streamer)
            .replace("%game%", game);
        }
        if (title && streamer) {
          presenceData.state = streamState
            .replace("%title%", title)
            .replace("%streamer%", streamer)
            .replace("%game%", game);
        }
        presenceData.smallImageKey = "live";
        presenceData.smallImageText = strings.live;
        if (pfp) {
          presenceData.largeImageKey =
            profilePic ?? (logoArr[logo] || "twitch");
        }
        if (buttons) {
          presenceData.buttons = [
            {
              label: strings.watchStream,
              url: document.URL.split("?")[0]
            }
          ];
        }
      }

      if (showVideo && !live) {
        //* Video or Clips
        const title = getElement(".channel-info-content h2").split("•").shift(),
          uploader = getElement(".channel-info-content h1"),
          game =
            getElement("a[data-a-target='stream-game-link']") ||
            "Just Chatting",
          profilePic = document
            .querySelector<HTMLImageElement>(
              ".tw-halo > .tw-aspect > .tw-avatar > .tw-image-avatar"
            )
            .src.replace("profile_image-70x70", "profile_image-600x600");
        if (title && uploader) {
          presenceData.details = vidDetail
            .replace("%title%", title)
            .replace("%uploader%", uploader)
            .replace("%game%", game);
        }
        if (title && uploader) {
          presenceData.state = vidState
            .replace("%title%", title)
            .replace("%uploader%", uploader)
            .replace("%game%", game);
        }
        presenceData.smallImageKey = "play";
        presenceData.smallImageText = strings.play;
        if (pfp) {
          presenceData.largeImageKey =
            profilePic ?? (logoArr[logo] || "twitch");
        }
        const [startTimestamp, endTimestamp] =
          presence.getTimestampsfromMedia(video);
        presenceData.startTimestamp = startTimestamp;
        presenceData.endTimestamp = endTimestamp;

        if (buttons) {
          presenceData.buttons = [
            {
              label: strings.watchVideo,
              url: document.URL.split("?")[0]
            }
          ];
        }
      }

      if (((showLive && live) || (showVideo && !live)) && video.paused) {
        delete presenceData.startTimestamp;
        delete presenceData.endTimestamp;
        presenceData.smallImageKey = "pause";
        presenceData.smallImageText = strings.pause;
      }

      //* Privacy mode enabled.
      if (privacy && showLive && live) {
        presenceData.details = strings.watchingLive;
        delete presenceData.state;
      } else if (privacy && showVideo && !live) {
        presenceData.details = strings.watchingVid;
        delete presenceData.state;
      } else if (showBrowsing && (!showVideo || !showLive)) {
        presenceData.details = strings.browse;
        delete presenceData.state;
      }
    }
  } else if (document.location.hostname === "dashboard.twitch.tv") {
    //* Creator Dashboard
    if (showBrowsing) {
      const statics = {
        "/home/": {
          details: `${strings.dashboard} | ${strings.viewPage}`,
          state: strings.home
        },
        "/stream-manager/": {
          details: strings.dashboard,
          state: strings.dashboardManage
        },
        "/channel-analytics/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.channelAnaly
        },
        "/stream-summary/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.streamSum
        },
        "/achievements/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.achievements
        },
        "/community/roles/": {
          details: strings.dashboard,
          state: strings.manageRoles
        },
        "/community/activity/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.activity
        },
        "/community/followers-list/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.followList
        },
        "/content/video-producer/": {
          details: strings.dashboard,
          state: strings.produce
        },
        "/content/collections/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.colls
        },
        "/content/clips/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.clips
        },
        "/settings/channel/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.channelSettings
        },
        "/settings/moderation/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.moderationSettings
        },
        "/drops/": {
          details: `${strings.dashboard} | ${strings.viewTheir}`,
          state: strings.dropsSettings
        },
        "/broadcast/": {
          details: strings.dashboard,
          state: strings.tools
        },
        "/extensions/": {
          details: strings.dashboard,
          state: strings.extensions
        }
      };

      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  } else if (document.location.hostname === "brand.twitch.tv") {
    //* Brand website
    if (showBrowsing) {
      const statics = {
        "/brand/": {
          details: strings.brand,
          state: strings.brandReal
        },
        "/madness/": {
          details: strings.brand,
          state: strings.brandMadness
        },
        "/expression/": {
          details: strings.brand,
          state: strings.brandExpression
        },
        "/together/": {
          details: strings.brand,
          state: strings.brandTogether
        }
      };

      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (
        path === "/" &&
        document.querySelector(".plyr").className.includes("plyr--playing")
      ) {
        presenceData.details = strings.brandWatch;
        presenceData.smallImageKey = "play";
        presenceData.smallImageText = strings.play;
        [presenceData.startTimestamp, presenceData.endTimestamp] =
          presence.getTimestamps(
            presence.timestampFromFormat(
              document.querySelector(".c-controls__time.plyr__time--current")
                .textContent
            ),
            presence.timestampFromFormat("01:30")
          );
      } else if (path === "/") presenceData.details = strings.brand;

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  } else if (document.location.hostname === "blog.twitch.tv") {
    //* Blog website
    if (showBrowsing) {
      const statics = {
        "/": {
          details: strings.blogBrowse
        },
        "/(\\w*|\\w*-\\w*)/archive/": {
          details: strings.blogArchive.replace(
            "{0}",
            location.pathname.replace(/\/?$/, "/").split("/")[3]
          )
        },
        "/(\\w*|\\w*-\\w*)/(\\d*)/(\\d*)/(\\d*)/((\\w*|\\w*-\\w*)*)/": {
          details: `${strings.blogs} | ${strings.readingArticle}`,
          state: document.querySelector(".c-page-heading__text")?.textContent
        }
      };

      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  } else if (document.location.hostname === "help.twitch.tv") {
    //* Help website
    if (showBrowsing) {
      const statics = {
        "/s/": {
          details: `${strings.help} | ${strings.browse}`
        },
        "/s/topiccatalog/": {
          details: strings.helpTopicCatalog
        },
        "/s/topic/": {
          details: strings.helpTopic,
          state: document.querySelector(".headlineTitle")?.textContent
        },
        "/s/article/": {
          details: `${strings.help} | ${strings.readingArticle}`,
          state: document.querySelector(".articleTitle")?.textContent
        }
      };

      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  } else if (document.location.hostname === "affiliate.twitch.tv") {
    //* Help website
    if (showBrowsing) {
      presenceData.details = strings.readingAbout;
      presenceData.state = strings.affiliate;
      presenceData.smallImageKey = "reading";
      presenceData.smallImageText = strings.browse;

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  } else if (document.location.hostname === "dev.twitch.tv") {
    //* Dev docs
    presenceData.largeImageKey = devLogoArr[devLogo] || "dev-main";
    if (showBrowsing) {
      const statics = {
        "/": {
          details: `${strings.dev} | ${strings.browse}`
        },
        "/products/": {
          details: `${strings.dev} | ${strings.viewing}`,
          state: strings.devProduct
        },
        "/showcase/": {
          details: `${strings.dev} | ${strings.viewing}`,
          state: strings.devShowcase
        },
        "/support/": {
          details: `${strings.dev} | ${strings.viewing}`,
          state: strings.devSupport
        },
        "/docs/": {
          details: strings.devDocs,
          state: strings.browse
        },
        "/docs/(\\w*|\\w*-\\w*)/": {
          details: `${strings.devDocs} | ${strings.readingAbout}`,
          state: document.querySelector(".text-content > h1")?.textContent
        }
      };

      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  } else if (document.location.hostname === "discuss.dev.twitch.tv") {
    //! Development forums
    presenceData.largeImageKey = devLogoArr[devLogo] || "dev-main";
    if (showBrowsing) {
      const statics = {
        "/": {
          details: `${strings.dev} (${strings.forums}) | ${strings.browse}`
        },
        "/c/": {
          details: `${strings.dev} (${strings.forums}) | ${strings.viewCategory}`,
          state: document.querySelector(".category-name")?.textContent
        },
        "/t/": {
          details: `${strings.dev} (${strings.forums}) | ${strings.thread}`,
          state: document.querySelector(".fancy-title")?.textContent
        },
        "/u/": {
          details: `${strings.dev} (${strings.forums}) | ${strings.user}`,
          state: document.querySelector(".username")?.textContent
        }
      };

      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  } else if (
    document.location.hostname === "devstatus.twitch.tv" ||
    document.location.hostname === "status.twitch.tv"
  ) {
    //* Status pages
    if (document.location.hostname === "devstatus.twitch.tv")
      presenceData.largeImageKey = devLogoArr[devLogo] || "dev-main";
    if (showBrowsing) {
      const statics = {
        "/": {
          details: `Status page | ${strings.browse}`
        },
        "/incidents/": {
          details: `Status page | ${strings.viewing}`,
          state: document.querySelector(".page-title > div")?.textContent
        },
        "/history/": {
          details: `Status page | ${strings.viewing}`,
          state: strings.incident
        },
        "/uptime/": {
          details: `Status page | ${strings.viewing}`,
          state: strings.uptime
        }
      };

      for (const [k, v] of Object.entries(statics)) {
        if (path.match(k)) {
          presenceData.smallImageKey = "reading";
          presenceData.smallImageText = strings.browse;
          presenceData = { ...presenceData, ...v };
        }
      }

      if (privacy) {
        presenceData.details = strings.browse;
        delete presenceData.state;
        delete presenceData.smallImageKey;
      }
    }
  }

  if (presenceData.details) {
    if (!showTimestamps) {
      delete presenceData.startTimestamp;
      delete presenceData.endTimestamp;
    }

    presence.setActivity(presenceData);
  } else presence.setActivity();
});

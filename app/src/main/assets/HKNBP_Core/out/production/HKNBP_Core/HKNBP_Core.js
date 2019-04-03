if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'HKNBP_Core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'HKNBP_Core'.");
}
var HKNBP_Core = function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var numberToInt = Kotlin.numberToInt;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var throwUPAE = Kotlin.throwUPAE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var String_0 = String;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Random = Kotlin.kotlin.random.Random;
  var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  ArrayLinkList.prototype = Object.create(ArrayList.prototype);
  ArrayLinkList.prototype.constructor = ArrayLinkList;
  Player$OnPlayerEvent.prototype = Object.create(Enum.prototype);
  Player$OnPlayerEvent.prototype.constructor = Player$OnPlayerEvent;
  Player$ProgrammableColor.prototype = Object.create(Enum.prototype);
  Player$ProgrammableColor.prototype.constructor = Player$ProgrammableColor;
  XMLTV$MultiLanguage$MultiLanguageList.prototype = Object.create(ArrayList.prototype);
  XMLTV$MultiLanguage$MultiLanguageList.prototype.constructor = XMLTV$MultiLanguage$MultiLanguageList;
  XMLTV$Programme$ProgrammeList.prototype = Object.create(ArrayList.prototype);
  XMLTV$Programme$ProgrammeList.prototype.constructor = XMLTV$Programme$ProgrammeList;
  function AboutWindow() {
    AboutWindow_instance = this;
  }
  AboutWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AboutWindow',
    interfaces: []
  };
  var AboutWindow_instance = null;
  function AboutWindow_getInstance() {
    if (AboutWindow_instance === null) {
      new AboutWindow();
    }
    return AboutWindow_instance;
  }
  function ArrayLinkList() {
    ArrayLinkList$Companion_getInstance();
    this.node_ns7zwb$_0 = null;
    this.lastTimeNode_rxcek8$_0 = null;
    this.onNodeEventListeners_907qg9$_0 = ArrayList_init();
  }
  Object.defineProperty(ArrayLinkList.prototype, 'node', {
    get: function () {
      if (this.indexOfOrNull_11rb$(this.node_ns7zwb$_0) == null) {
        this.node_ns7zwb$_0 = null;
      }
      if (this.node_ns7zwb$_0 == null) {
        if (0 < this.size) {
          this.node_ns7zwb$_0 = getOrNull(this, 0);
        }
      }
      return this.node_ns7zwb$_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      var preChangeNodeID = this.nodeID;
      this.node_ns7zwb$_0 = value;
      tmp$ = this.onNodeEventListeners_907qg9$_0.iterator();
      while (tmp$.hasNext()) {
        var onNodeEventListener = tmp$.next();
        tmp$_0 = this.nodeID;
        if (preChangeNodeID != null) {
          tmp$_1 = getOrNull(this, preChangeNodeID);
        }
         else {
          tmp$_1 = null;
        }
        onNodeEventListener.OnNodeIDChanged_t4rudg$(preChangeNodeID, tmp$_0, tmp$_1, this.node);
      }
    }
  });
  Object.defineProperty(ArrayLinkList.prototype, 'nodeID', {
    get: function () {
      return this.indexOfOrNull_11rb$(this.node);
    },
    set: function (value) {
    }
  });
  ArrayLinkList.prototype.saveLastTimeNode_8x70b$_0 = function () {
    this.lastTimeNode_rxcek8$_0 = this.node;
  };
  function ArrayLinkList$OnNodeEventListener() {
  }
  ArrayLinkList$OnNodeEventListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnNodeEventListener',
    interfaces: []
  };
  ArrayLinkList.prototype.addOnNodeEventListener_ljxrtv$ = function (onNodeEventListener) {
    this.onNodeEventListeners_907qg9$_0.add_11rb$(onNodeEventListener);
  };
  ArrayLinkList.prototype.indexOfOrNull_11rb$ = function (element) {
    if (element == null) {
      return null;
    }
     else {
      if (ArrayList.prototype.indexOf_11rb$.call(this, element) === -1) {
        return null;
      }
       else {
        return ArrayList.prototype.indexOf_11rb$.call(this, element);
      }
    }
  };
  ArrayLinkList.prototype.next = function () {
    var index = this.indexOfOrNull_11rb$(this.node);
    if (index != null) {
      this.saveLastTimeNode_8x70b$_0();
      this.node = getOrNull(this, (index + 1 | 0) % this.size);
      return true;
    }
    return false;
  };
  ArrayLinkList.prototype.previous = function () {
    var tmp$;
    var index = this.indexOfOrNull_11rb$(this.node);
    if (index != null) {
      this.saveLastTimeNode_8x70b$_0();
      if ((index - 1 | 0) === -1) {
        tmp$ = get_lastIndex(this);
      }
       else {
        tmp$ = index - 1 | 0;
      }
      this.node = getOrNull(this, tmp$);
      return true;
    }
    return false;
  };
  ArrayLinkList.prototype.designated_za3lpa$ = function (nodeID) {
    if (0 <= nodeID && nodeID < this.size) {
      this.saveLastTimeNode_8x70b$_0();
      this.node = getOrNull(this, nodeID);
      return true;
    }
    return false;
  };
  ArrayLinkList.prototype.lastTime = function () {
    var toNode = this.lastTimeNode_rxcek8$_0;
    this.saveLastTimeNode_8x70b$_0();
    this.node = toNode;
  };
  function ArrayLinkList$Companion() {
    ArrayLinkList$Companion_instance = this;
  }
  ArrayLinkList$Companion.prototype.valueOf_h5wnxp$ = function (arrayList) {
    var arrayLinkList = ArrayLinkList_init([]);
    for (var i = 0; i !== arrayList.size; ++i) {
      arrayLinkList.add_11rb$(arrayList.get_za3lpa$(i));
    }
    return arrayLinkList;
  };
  ArrayLinkList$Companion.prototype.valueOf_ro6dgy$ = function (array) {
    var arrayLinkList = ArrayLinkList_init([]);
    for (var i = 0; i !== array.length; ++i) {
      arrayLinkList.add_11rb$(array[i]);
    }
    return arrayLinkList;
  };
  ArrayLinkList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ArrayLinkList$Companion_instance = null;
  function ArrayLinkList$Companion_getInstance() {
    if (ArrayLinkList$Companion_instance === null) {
      new ArrayLinkList$Companion();
    }
    return ArrayLinkList$Companion_instance;
  }
  ArrayLinkList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayLinkList',
    interfaces: [ArrayList]
  };
  function ArrayLinkList_init(initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    $this.node = getOrNull($this, 0);
    return $this;
  }
  function ArrayLinkList_init_0(initNodeID, initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    if (0 <= initNodeID && initNodeID < initElements.length) {
      $this.node = getOrNull($this, initNodeID);
    }
     else {
      $this.node = getOrNull($this, 0);
    }
    return $this;
  }
  function AudioDescription() {
    AudioDescription_instance = this;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.audioDescription_0 = Kotlin.isType(tmp$ = document.getElementById('audioDescription'), HTMLDivElement) ? tmp$ : throwCCE();
    this.volumeUpButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('audioDescriptionVolumeUpButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.volumeDownButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('audioDescriptionVolumeDownButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.volumeValue_0 = Kotlin.isType(tmp$_2 = document.getElementById('audioDescriptionVolumeValue'), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.volumeIconList_0 = Kotlin.isType(tmp$_3 = document.getElementById('audioDescriptionVolumeIconList'), HTMLDivElement) ? tmp$_3 : throwCCE();
    this.volumeIcon_0 = '<i class="icon-font">&#xe82a;<\/i>';
    this.hideTimer_0 = window.setTimeout(AudioDescription$hideTimer$lambda, 0);
    this.volumeUpButton_0.onclick = AudioDescription_init$lambda;
    this.volumeDownButton_0.onclick = AudioDescription_init$lambda_0;
  }
  AudioDescription.prototype.show = function () {
    var tmp$;
    this.volumeValue_0.innerHTML = numberToInt(get_player().volume).toString();
    this.volumeIconList_0.innerHTML = '';
    tmp$ = numberToInt(get_player().volume / 10);
    for (var i = 0; i < tmp$; i++) {
      this.volumeIconList_0.innerHTML = this.volumeIconList_0.innerHTML + this.volumeIcon_0;
    }
    this.audioDescription_0.style.display = 'block';
  };
  function AudioDescription$show$lambda(this$AudioDescription) {
    return function () {
      this$AudioDescription.hide();
    };
  }
  AudioDescription.prototype.show_za3lpa$ = function (showTime) {
    window.clearTimeout(this.hideTimer_0);
    this.hideTimer_0 = window.setTimeout(AudioDescription$show$lambda(this), showTime);
    this.show();
  };
  AudioDescription.prototype.hide = function () {
    this.audioDescription_0.style.display = 'none';
  };
  function AudioDescription$hideTimer$lambda() {
  }
  function AudioDescription_init$lambda(event) {
    get_player().volumeUp;
  }
  function AudioDescription_init$lambda_0(event) {
    get_player().volumeDown;
  }
  AudioDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AudioDescription',
    interfaces: []
  };
  var AudioDescription_instance = null;
  function AudioDescription_getInstance() {
    if (AudioDescription_instance === null) {
      new AudioDescription();
    }
    return AudioDescription_instance;
  }
  function ChannelInformation() {
    ChannelInformation_instance = this;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    this.channelInformation_0 = Kotlin.isType(tmp$ = document.getElementById('channelInformation'), HTMLElement) ? tmp$ : throwCCE();
    this.currentChannelName_0 = Kotlin.isType(tmp$_0 = document.getElementById('channelInformationCurrentChannelName'), HTMLElement) ? tmp$_0 : throwCCE();
    this.currentChannelNumber_0 = Kotlin.isType(tmp$_1 = document.getElementById('channelInformationCurrentChannelNumber'), HTMLElement) ? tmp$_1 : throwCCE();
    this.currentDate_0 = Kotlin.isType(tmp$_2 = document.getElementById('channelInformationCurrentDate'), HTMLElement) ? tmp$_2 : throwCCE();
    this.currentProgrammeTitle_0 = Kotlin.isType(tmp$_3 = document.getElementById('channelInformationCurrentProgrammeTitle'), HTMLElement) ? tmp$_3 : throwCCE();
    this.currentProgrammeSubTitle_0 = Kotlin.isType(tmp$_4 = document.getElementById('channelInformationCurrentProgrammeSubTitle'), HTMLElement) ? tmp$_4 : throwCCE();
    this.currentProgrammeEpisode_0 = Kotlin.isType(tmp$_5 = document.getElementById('channelInformationCurrentProgrammeEpisode'), HTMLElement) ? tmp$_5 : throwCCE();
    this.currentProgrammeBroadcastTime_0 = Kotlin.isType(tmp$_6 = document.getElementById('channelInformationCurrentProgrammeBroadcastTime'), HTMLElement) ? tmp$_6 : throwCCE();
    this.currentProgrammeDesc_0 = Kotlin.isType(tmp$_7 = document.getElementById('channelInformationCurrentProgrammeDesc'), HTMLElement) ? tmp$_7 : throwCCE();
    this.currentProgrammeCategory_0 = Kotlin.isType(tmp$_8 = document.getElementById('channelInformationCurrentProgrammeCategory'), HTMLElement) ? tmp$_8 : throwCCE();
    this.hideTimer_0 = 0;
    this.isShow_g8q9la$_0 = equals(this.channelInformation_0.style.display, 'block');
    this.currentDateTimer_0 = 0;
  }
  Object.defineProperty(ChannelInformation.prototype, 'isShow', {
    get: function () {
      return equals(this.channelInformation_0.style.display, 'block');
    },
    set: function (isShow) {
      this.isShow_g8q9la$_0 = isShow;
    }
  });
  ChannelInformation.prototype.setCurrentChannelName_0 = function () {
    var tmp$, tmp$_0;
    this.currentChannelName_0.innerHTML = (tmp$_0 = (tmp$ = get_tvChannels().node) != null ? tmp$.name : null) != null ? tmp$_0 : '';
  };
  ChannelInformation.prototype.setCurrentChannelNumber_0 = function () {
    var tmp$;
    this.currentChannelNumber_0.innerHTML = padStart(toString((tmp$ = get_tvChannels().node) != null ? tmp$.number : null), 3, 48);
  };
  function ChannelInformation$setCurrentDate$lambda(this$ChannelInformation) {
    return function () {
      this$ChannelInformation.currentDate_0.innerHTML = (new Date()).toLocaleString();
    };
  }
  ChannelInformation.prototype.setCurrentDate_0 = function () {
    var script = ChannelInformation$setCurrentDate$lambda(this);
    script();
    this.currentDateTimer_0 = window.setInterval(script, 1000);
  };
  function ChannelInformation$setCurrentProgrammeTitle$lambda(this$ChannelInformation) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      this$ChannelInformation.currentProgrammeTitle_0.innerHTML = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.titles : null) != null ? tmp$_1.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? tmp$_3.title : null) != null ? tmp$_4 : '';
    };
  }
  ChannelInformation.prototype.setCurrentProgrammeTitle_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeTitle_0.innerHTML = '';
    (tmp$_0 = (tmp$ = get_tvChannels().node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelInformation$setCurrentProgrammeTitle$lambda(this)), Unit) : null;
  };
  function ChannelInformation$setCurrentProgrammeSubTitle$lambda(this$ChannelInformation) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      this$ChannelInformation.currentProgrammeSubTitle_0.innerHTML = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.subTitles : null) != null ? tmp$_1.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? tmp$_3.subTitle : null) != null ? tmp$_4 : '';
    };
  }
  ChannelInformation.prototype.setCurrentProgrammeSubTitle_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeSubTitle_0.innerHTML = '';
    (tmp$_0 = (tmp$ = get_tvChannels().node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelInformation$setCurrentProgrammeSubTitle$lambda(this)), Unit) : null;
  };
  function ChannelInformation$setCurrentProgrammeEpisode$lambda$lambda(closure$xmltv, this$ChannelInformation) {
    return function (dialogues) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
      var episodeInnerHTML = '';
      var season = (tmp$_1 = (tmp$_0 = (tmp$ = closure$xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.episodeNum : null) != null ? tmp$_1.getSeason() : null;
      if (season != null) {
        episodeInnerHTML += (tmp$_4 = (tmp$_3 = (tmp$_2 = dialogues.node) != null ? tmp$_2.programmeSeason : null) != null ? replace(tmp$_3, '${season}', season.toString()) : null) != null ? tmp$_4 : '';
      }
      var episode = (tmp$_7 = (tmp$_6 = (tmp$_5 = closure$xmltv.programmes) != null ? tmp$_5.getProgrammeByTime() : null) != null ? tmp$_6.episodeNum : null) != null ? tmp$_7.getEpisode() : null;
      if (episode != null) {
        episodeInnerHTML += (tmp$_10 = (tmp$_9 = (tmp$_8 = dialogues.node) != null ? tmp$_8.programmeEpisode : null) != null ? replace(tmp$_9, '${episode}', episode.toString()) : null) != null ? tmp$_10 : '';
      }
      this$ChannelInformation.currentProgrammeEpisode_0.innerHTML = episodeInnerHTML;
    };
  }
  function ChannelInformation$setCurrentProgrammeEpisode$lambda(this$ChannelInformation) {
    return function (xmltv) {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ChannelInformation$setCurrentProgrammeEpisode$lambda$lambda(xmltv, this$ChannelInformation));
    };
  }
  ChannelInformation.prototype.setCurrentProgrammeEpisode_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeEpisode_0.innerHTML = '';
    (tmp$_0 = (tmp$ = get_tvChannels().node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelInformation$setCurrentProgrammeEpisode$lambda(this)), Unit) : null;
  };
  function ChannelInformation$setCurrentProgrammeBroadcastTime$lambda(this$ChannelInformation) {
    return function (xmltv) {
      var tmp$;
      var programmeTime = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null;
      if (programmeTime != null) {
        var fromTime = padStart(programmeTime.start.getHours().toString(), 2, 48) + ':' + padStart(programmeTime.start.getMinutes().toString(), 2, 48);
        var toTime = padStart(programmeTime.stop.getHours().toString(), 2, 48) + ':' + padStart(programmeTime.stop.getMinutes().toString(), 2, 48);
        this$ChannelInformation.currentProgrammeBroadcastTime_0.innerHTML = fromTime + '-' + toTime;
      }
       else {
        this$ChannelInformation.currentProgrammeBroadcastTime_0.innerHTML = '';
      }
    };
  }
  ChannelInformation.prototype.setCurrentProgrammeBroadcastTime_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeBroadcastTime_0.innerHTML = '';
    (tmp$_0 = (tmp$ = get_tvChannels().node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelInformation$setCurrentProgrammeBroadcastTime$lambda(this)), Unit) : null;
  };
  function ChannelInformation$setCurrentProgrammeDesc$lambda(this$ChannelInformation) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      this$ChannelInformation.currentProgrammeDesc_0.innerHTML = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.descs : null) != null ? tmp$_1.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? tmp$_3.desc : null) != null ? tmp$_4 : '';
    };
  }
  ChannelInformation.prototype.setCurrentProgrammeDesc_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeDesc_0.innerHTML = '';
    (tmp$_0 = (tmp$ = get_tvChannels().node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelInformation$setCurrentProgrammeDesc$lambda(this)), Unit) : null;
  };
  function ChannelInformation$setCurrentProgrammeCategory$lambda(this$ChannelInformation) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      this$ChannelInformation.currentProgrammeCategory_0.innerHTML = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.categorys : null) != null ? tmp$_1.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? tmp$_3.category : null) != null ? tmp$_4 : '';
    };
  }
  ChannelInformation.prototype.setCurrentProgrammeCategory_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeCategory_0.innerHTML = '';
    (tmp$_0 = (tmp$ = get_tvChannels().node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelInformation$setCurrentProgrammeCategory$lambda(this)), Unit) : null;
  };
  ChannelInformation.prototype.update = function () {
    this.setCurrentChannelName_0();
    this.setCurrentChannelNumber_0();
    this.setCurrentDate_0();
    this.setCurrentProgrammeTitle_0();
    this.setCurrentProgrammeSubTitle_0();
    this.setCurrentProgrammeEpisode_0();
    this.setCurrentProgrammeDesc_0();
    this.setCurrentProgrammeBroadcastTime_0();
    this.setCurrentProgrammeCategory_0();
  };
  ChannelInformation.prototype.show = function () {
    this.update();
    this.channelInformation_0.style.display = 'block';
  };
  function ChannelInformation$show$lambda(this$ChannelInformation) {
    return function () {
      this$ChannelInformation.hide();
    };
  }
  ChannelInformation.prototype.show_za3lpa$ = function (hideTimerTimeout) {
    this.show();
    window.clearTimeout(this.hideTimer_0);
    this.hideTimer_0 = window.setTimeout(ChannelInformation$show$lambda(this), hideTimerTimeout);
  };
  ChannelInformation.prototype.hide = function () {
    this.channelInformation_0.style.display = 'none';
    window.clearInterval(this.currentDateTimer_0);
  };
  ChannelInformation.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChannelInformation',
    interfaces: []
  };
  var ChannelInformation_instance = null;
  function ChannelInformation_getInstance() {
    if (ChannelInformation_instance === null) {
      new ChannelInformation();
    }
    return ChannelInformation_instance;
  }
  function ConsentPanel() {
    ConsentPanel_instance = this;
    var tmp$, tmp$_0, tmp$_1;
    this.consentPanel_0 = Kotlin.isType(tmp$ = document.getElementById('consentPanel'), HTMLDivElement) ? tmp$ : throwCCE();
    this.agreeConsentButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('consentPanelAgreeConsentButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.consentPanel_0.style.cursor = 'auto';
    if (((tmp$_1 = localStorage.getItem('IsAgreeConsent')) != null ? toBoolean(tmp$_1) : null) !== true) {
      this.show();
    }
    Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ConsentPanel_init$lambda(this));
    this.agreeConsentButton_0.onclick = ConsentPanel_init$lambda_0(this);
  }
  ConsentPanel.prototype.show = function () {
    this.consentPanel_0.style.display = 'block';
  };
  ConsentPanel.prototype.hide = function () {
    this.consentPanel_0.style.display = 'none';
  };
  function ConsentPanel_init$lambda(this$ConsentPanel) {
    return function (dialagues) {
      var tmp$, tmp$_0;
      this$ConsentPanel.agreeConsentButton_0.innerHTML = (tmp$_0 = (tmp$ = dialagues.node) != null ? tmp$.agree : null) != null ? tmp$_0 : '\u540C\u610F';
    };
  }
  function ConsentPanel_init$lambda_0(this$ConsentPanel) {
    return function (event) {
      localStorage.setItem('IsAgreeConsent', true.toString());
      this$ConsentPanel.hide();
    };
  }
  ConsentPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConsentPanel',
    interfaces: []
  };
  var ConsentPanel_instance = null;
  function ConsentPanel_getInstance() {
    if (ConsentPanel_instance === null) {
      new ConsentPanel();
    }
    return ConsentPanel_instance;
  }
  function Dialogue(language, agree, programmeSeason, programmeTotalSeason, programmeEpisode, programmeTotalEpisode, programmePart, programmeTotalPart, canNotFind, canNotReadData) {
    Dialogue$Companion_getInstance();
    if (language === void 0)
      language = '';
    if (agree === void 0)
      agree = '';
    if (programmeSeason === void 0)
      programmeSeason = '';
    if (programmeTotalSeason === void 0)
      programmeTotalSeason = '';
    if (programmeEpisode === void 0)
      programmeEpisode = '';
    if (programmeTotalEpisode === void 0)
      programmeTotalEpisode = '';
    if (programmePart === void 0)
      programmePart = '';
    if (programmeTotalPart === void 0)
      programmeTotalPart = '';
    if (canNotFind === void 0)
      canNotFind = '';
    if (canNotReadData === void 0)
      canNotReadData = '';
    this.language = language;
    this.agree = agree;
    this.programmeSeason = programmeSeason;
    this.programmeTotalSeason = programmeTotalSeason;
    this.programmeEpisode = programmeEpisode;
    this.programmeTotalEpisode = programmeTotalEpisode;
    this.programmePart = programmePart;
    this.programmeTotalPart = programmeTotalPart;
    this.canNotFind = canNotFind;
    this.canNotReadData = canNotReadData;
  }
  function Dialogue$Companion() {
    Dialogue$Companion_instance = this;
    this.dialogues_0 = null;
  }
  Dialogue$Companion.prototype.getDialoguesNodeID_0 = function (dialogues, language) {
    var tmp$;
    var dialogueNodeID = 0;
    tmp$ = dialogues.iterator();
    while (tmp$.hasNext()) {
      var dialogue = tmp$.next();
      dialogueNodeID = dialogueNodeID + 1 | 0;
      if (language === dialogue.language) {
        return dialogueNodeID;
      }
    }
    return 0;
  };
  function Dialogue$Companion$getDialogues$lambda$ObjectLiteral() {
  }
  Dialogue$Companion$getDialogues$lambda$ObjectLiteral.prototype.OnNodeIDChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    localStorage.setItem('SelectedLanguage', toString(postChangeNodeID));
  };
  Dialogue$Companion$getDialogues$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Dialogue$Companion$getDialogues$lambda(this$Dialogue$, closure$onLoadedDialogueListener) {
    return function (xmlHttp) {
      var tmp$, tmp$_0;
      if (xmlHttp.responseText !== '') {
        var dialogues = ArrayLinkList$Companion_getInstance().valueOf_ro6dgy$(JSON.parse(xmlHttp.responseText));
        dialogues.addOnNodeEventListener_ljxrtv$(new Dialogue$Companion$getDialogues$lambda$ObjectLiteral());
        dialogues.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('SelectedLanguage')) != null ? toInt(tmp$) : null) != null ? tmp$_0 : 0);
        this$Dialogue$.dialogues_0 = dialogues;
        closure$onLoadedDialogueListener(ensureNotNull(this$Dialogue$.dialogues_0));
      }
    };
  }
  Dialogue$Companion.prototype.getDialogues_fs1aqo$ = function (onLoadedDialogueListener) {
    if (this.dialogues_0 == null) {
      LoadFile_getInstance().load_phn05g$('data/dialogue.json', Dialogue$Companion$getDialogues$lambda(this, onLoadedDialogueListener));
    }
     else {
      onLoadedDialogueListener(ensureNotNull(this.dialogues_0));
    }
  };
  Dialogue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Dialogue$Companion_instance = null;
  function Dialogue$Companion_getInstance() {
    if (Dialogue$Companion_instance === null) {
      new Dialogue$Companion();
    }
    return Dialogue$Companion_instance;
  }
  Dialogue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dialogue',
    interfaces: []
  };
  function EPG() {
    EPG_instance = this;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22;
    this.epg_0 = Kotlin.isType(tmp$ = document.getElementById('epg'), HTMLElement) ? tmp$ : throwCCE();
    this.displayCurrentDateBox_0 = Kotlin.isType(tmp$_0 = document.getElementById('epgDisplayCurrentDateBox'), HTMLElement) ? tmp$_0 : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('epgHideButton'), HTMLElement) ? tmp$_1 : throwCCE();
    this.programmeInformationTitle_0 = Kotlin.isType(tmp$_2 = document.getElementById('epgProgrammeInformationTitle'), HTMLElement) ? tmp$_2 : throwCCE();
    this.programmeInformationSubTitle_0 = Kotlin.isType(tmp$_3 = document.getElementById('epgProgrammeInformationSubTitle'), HTMLElement) ? tmp$_3 : throwCCE();
    this.programmeInformationDesc_0 = Kotlin.isType(tmp$_4 = document.getElementById('epgProgrammeInformationDesc'), HTMLElement) ? tmp$_4 : throwCCE();
    this.programmeInformationCredit_0 = Kotlin.isType(tmp$_5 = document.getElementById('epgProgrammeInformationCredit'), HTMLElement) ? tmp$_5 : throwCCE();
    this.programmeInformationDate_0 = Kotlin.isType(tmp$_6 = document.getElementById('epgProgrammeInformationDate'), HTMLElement) ? tmp$_6 : throwCCE();
    this.programmeInformationCategory_0 = Kotlin.isType(tmp$_7 = document.getElementById('epgProgrammeInformationCategory'), HTMLElement) ? tmp$_7 : throwCCE();
    this.programmeInformationKeyword_0 = Kotlin.isType(tmp$_8 = document.getElementById('epgProgrammeInformationKeyword'), HTMLElement) ? tmp$_8 : throwCCE();
    this.programmeInformationLanguage_0 = Kotlin.isType(tmp$_9 = document.getElementById('epgProgrammeInformationLanguage'), HTMLElement) ? tmp$_9 : throwCCE();
    this.programmeInformationOrigLanguage_0 = Kotlin.isType(tmp$_10 = document.getElementById('epgProgrammeInformationOrigLanguage'), HTMLElement) ? tmp$_10 : throwCCE();
    this.programmeInformationLength_0 = Kotlin.isType(tmp$_11 = document.getElementById('epgProgrammeInformationLength'), HTMLElement) ? tmp$_11 : throwCCE();
    this.programmeInformationIcon_0 = Kotlin.isType(tmp$_12 = document.getElementById('epgProgrammeInformationIcon'), HTMLImageElement) ? tmp$_12 : throwCCE();
    this.programmeInformationUrl_0 = Kotlin.isType(tmp$_13 = document.getElementById('epgProgrammeInformationUrl'), HTMLElement) ? tmp$_13 : throwCCE();
    this.programmeInformationCountry_0 = Kotlin.isType(tmp$_14 = document.getElementById('epgProgrammeInformationCountry'), HTMLElement) ? tmp$_14 : throwCCE();
    this.programmeInformationEpisodeNum_0 = Kotlin.isType(tmp$_15 = document.getElementById('epgProgrammeInformationEpisodeNum'), HTMLElement) ? tmp$_15 : throwCCE();
    this.programmeInformationPreviouslyShown_0 = Kotlin.isType(tmp$_16 = document.getElementById('epgProgrammeInformationPreviouslyShown'), HTMLElement) ? tmp$_16 : throwCCE();
    this.programmeInformationBroadcastDateSlot_0 = Kotlin.isType(tmp$_17 = document.getElementById('epgProgrammeInformationBroadcastDateSlot'), HTMLElement) ? tmp$_17 : throwCCE();
    this.programmeInformationBroadcastTimeSlot_0 = Kotlin.isType(tmp$_18 = document.getElementById('epgProgrammeInformationBroadcastTimeSlot'), HTMLElement) ? tmp$_18 : throwCCE();
    this.programmeListCurrentDisplayDate_0 = Kotlin.isType(tmp$_19 = document.getElementById('epgProgrammeListCurrentDisplayDate'), HTMLElement) ? tmp$_19 : throwCCE();
    this.programmeListTimeLine_0 = Kotlin.isType(tmp$_20 = document.getElementById('epgProgrammeListTimeLine'), HTMLElement) ? tmp$_20 : throwCCE();
    this.programmeListChannelList_0 = Kotlin.isType(tmp$_21 = document.getElementById('epgProgrammeListChannelList'), HTMLElement) ? tmp$_21 : throwCCE();
    this.programmeListTable_0 = Kotlin.isType(tmp$_22 = document.getElementById('epgProgrammeListTable'), HTMLElement) ? tmp$_22 : throwCCE();
    this.tabIndexZ_0 = 3;
    this.updateDisplayCurrentDateBoxTimer_0 = 0;
    this.fromDate_0 = this.nowDateWithoutMinute_0();
    this.toDate_0 = this.addDay_0(this.nowDateWithoutMinute_0(), 2);
    this.epg_0.style.cursor = 'auto';
    this.hideButton_0.onclick = EPG_init$lambda(this);
  }
  function EPG$setDisplayCurrentDateBox$lambda(this$EPG) {
    return function () {
      this$EPG.displayCurrentDateBox_0.innerHTML = (new Date()).toLocaleString();
    };
  }
  EPG.prototype.setDisplayCurrentDateBox_0 = function () {
    var script = EPG$setDisplayCurrentDateBox$lambda(this);
    script();
    this.updateDisplayCurrentDateBoxTimer_0 = window.setInterval(script, 1000);
  };
  EPG.prototype.setProgrammeInformationTitle_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.programmeInformationTitle_0.innerHTML = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = programme.titles) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? tmp$_1.title : null) != null ? tmp$_2 : '';
  };
  EPG.prototype.setProgrammeInformationSubTitle_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    var string = (tmp$_1 = (tmp$_0 = (tmp$ = programme.subTitles) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? tmp$_1.subTitle : null;
    if (string != null) {
      this.programmeInformationSubTitle_0.innerHTML = ' : ' + string;
    }
     else {
      this.programmeInformationSubTitle_0.innerHTML = '';
    }
  };
  EPG.prototype.setProgrammeInformationDesc_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.programmeInformationDesc_0.innerHTML = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = programme.descs) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? tmp$_1.desc : null) != null ? tmp$_2 : '';
  };
  EPG.prototype.setProgrammeInformationCredit_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47, tmp$_48, tmp$_49, tmp$_50, tmp$_51, tmp$_52, tmp$_53, tmp$_54, tmp$_55, tmp$_56, tmp$_57, tmp$_58, tmp$_59, tmp$_60, tmp$_61, tmp$_62, tmp$_63, tmp$_64, tmp$_65, tmp$_66, tmp$_67, tmp$_68, tmp$_69, tmp$_70, tmp$_71, tmp$_72, tmp$_73, tmp$_74, tmp$_75, tmp$_76, tmp$_77, tmp$_78, tmp$_79, tmp$_80, tmp$_81, tmp$_82, tmp$_83, tmp$_84, tmp$_85, tmp$_86, tmp$_87, tmp$_88, tmp$_89, tmp$_90, tmp$_91, tmp$_92, tmp$_93, tmp$_94, tmp$_95, tmp$_96, tmp$_97, tmp$_98, tmp$_99, tmp$_100, tmp$_101, tmp$_102, tmp$_103, tmp$_104, tmp$_105, tmp$_106, tmp$_107, tmp$_108, tmp$_109, tmp$_110, tmp$_111, tmp$_112, tmp$_113, tmp$_114, tmp$_115, tmp$_116, tmp$_117, tmp$_118, tmp$_119, tmp$_120, tmp$_121, tmp$_122, tmp$_123, tmp$_124, tmp$_125, tmp$_126, tmp$_127, tmp$_128, tmp$_129, tmp$_130, tmp$_131;
    this.programmeInformationCredit_0.innerHTML = '';
    if (((tmp$_1 = (tmp$_0 = (tmp$ = programme.credits) != null ? tmp$.directors : null) != null ? tmp$_0.size : null) != null ? tmp$_1 : 0) > 0) {
      this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + '\u5C0E\u6F14: ';
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = programme.credits) != null ? tmp$_2.directors : null) != null ? tmp$_3.size : null) != null ? tmp$_4 : 0;
      for (var i = 0; i < tmp$_5; i++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_8 = (tmp$_7 = (tmp$_6 = programme.credits) != null ? tmp$_6.directors : null) != null ? getOrNull(tmp$_7, i) : null) != null ? tmp$_8 : '') + ' ');
      }
    }
    if (((tmp$_11 = (tmp$_10 = (tmp$_9 = programme.credits) != null ? tmp$_9.actors : null) != null ? tmp$_10.size : null) != null ? tmp$_11 : 0) > 0) {
      tmp$_13 = this.programmeInformationCredit_0;
      tmp$_14 = tmp$_13.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_12 = '';
      }
       else {
        tmp$_12 = '<br/>';
      }
      tmp$_13.innerHTML = tmp$_14 + (tmp$_12 + '\u6F14\u54E1: ');
      tmp$_18 = (tmp$_17 = (tmp$_16 = (tmp$_15 = programme.credits) != null ? tmp$_15.actors : null) != null ? tmp$_16.size : null) != null ? tmp$_17 : 0;
      for (var i_0 = 0; i_0 < tmp$_18; i_0++) {
        tmp$_27 = this.programmeInformationCredit_0;
        tmp$_27.innerHTML = tmp$_27.innerHTML + (((tmp$_22 = (tmp$_21 = (tmp$_20 = (tmp$_19 = programme.credits) != null ? tmp$_19.actors : null) != null ? getOrNull(tmp$_20, i_0) : null) != null ? tmp$_21.actor : null) != null ? tmp$_22 : '') + '-' + toString((tmp$_26 = (tmp$_25 = (tmp$_24 = (tmp$_23 = programme.credits) != null ? tmp$_23.actors : null) != null ? getOrNull(tmp$_24, i_0) : null) != null ? tmp$_25.role : null) != null ? tmp$_26 : '') + ' ');
      }
    }
    if (((tmp$_30 = (tmp$_29 = (tmp$_28 = programme.credits) != null ? tmp$_28.writers : null) != null ? tmp$_29.size : null) != null ? tmp$_30 : 0) > 0) {
      tmp$_32 = this.programmeInformationCredit_0;
      tmp$_33 = tmp$_32.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_31 = '';
      }
       else {
        tmp$_31 = '<br/>';
      }
      tmp$_32.innerHTML = tmp$_33 + (tmp$_31 + '\u7DE8\u5287: ');
      tmp$_37 = (tmp$_36 = (tmp$_35 = (tmp$_34 = programme.credits) != null ? tmp$_34.writers : null) != null ? tmp$_35.size : null) != null ? tmp$_36 : 0;
      for (var i_1 = 0; i_1 < tmp$_37; i_1++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_40 = (tmp$_39 = (tmp$_38 = programme.credits) != null ? tmp$_38.writers : null) != null ? getOrNull(tmp$_39, i_1) : null) != null ? tmp$_40 : '') + ' ');
      }
    }
    if (((tmp$_43 = (tmp$_42 = (tmp$_41 = programme.credits) != null ? tmp$_41.adapters : null) != null ? tmp$_42.size : null) != null ? tmp$_43 : 0) > 0) {
      tmp$_45 = this.programmeInformationCredit_0;
      tmp$_46 = tmp$_45.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_44 = '';
      }
       else {
        tmp$_44 = '<br/>';
      }
      tmp$_45.innerHTML = tmp$_46 + (tmp$_44 + '\u6539\u7DE8: ');
      tmp$_50 = (tmp$_49 = (tmp$_48 = (tmp$_47 = programme.credits) != null ? tmp$_47.adapters : null) != null ? tmp$_48.size : null) != null ? tmp$_49 : 0;
      for (var i_2 = 0; i_2 < tmp$_50; i_2++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_53 = (tmp$_52 = (tmp$_51 = programme.credits) != null ? tmp$_51.adapters : null) != null ? getOrNull(tmp$_52, i_2) : null) != null ? tmp$_53 : '') + ' ');
      }
    }
    if (((tmp$_56 = (tmp$_55 = (tmp$_54 = programme.credits) != null ? tmp$_54.producers : null) != null ? tmp$_55.size : null) != null ? tmp$_56 : 0) > 0) {
      tmp$_58 = this.programmeInformationCredit_0;
      tmp$_59 = tmp$_58.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_57 = '';
      }
       else {
        tmp$_57 = '<br/>';
      }
      tmp$_58.innerHTML = tmp$_59 + (tmp$_57 + '\u88FD\u7247\u4EBA: ');
      tmp$_63 = (tmp$_62 = (tmp$_61 = (tmp$_60 = programme.credits) != null ? tmp$_60.producers : null) != null ? tmp$_61.size : null) != null ? tmp$_62 : 0;
      for (var i_3 = 0; i_3 < tmp$_63; i_3++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_66 = (tmp$_65 = (tmp$_64 = programme.credits) != null ? tmp$_64.producers : null) != null ? getOrNull(tmp$_65, i_3) : null) != null ? tmp$_66 : '') + ' ');
      }
    }
    if (((tmp$_69 = (tmp$_68 = (tmp$_67 = programme.credits) != null ? tmp$_67.composers : null) != null ? tmp$_68.size : null) != null ? tmp$_69 : 0) > 0) {
      tmp$_71 = this.programmeInformationCredit_0;
      tmp$_72 = tmp$_71.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_70 = '';
      }
       else {
        tmp$_70 = '<br/>';
      }
      tmp$_71.innerHTML = tmp$_72 + (tmp$_70 + '\u4F5C\u66F2\u5BB6: ');
      tmp$_76 = (tmp$_75 = (tmp$_74 = (tmp$_73 = programme.credits) != null ? tmp$_73.composers : null) != null ? tmp$_74.size : null) != null ? tmp$_75 : 0;
      for (var i_4 = 0; i_4 < tmp$_76; i_4++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_79 = (tmp$_78 = (tmp$_77 = programme.credits) != null ? tmp$_77.composers : null) != null ? getOrNull(tmp$_78, i_4) : null) != null ? tmp$_79 : '') + ' ');
      }
    }
    if (((tmp$_82 = (tmp$_81 = (tmp$_80 = programme.credits) != null ? tmp$_80.editors : null) != null ? tmp$_81.size : null) != null ? tmp$_82 : 0) > 0) {
      tmp$_84 = this.programmeInformationCredit_0;
      tmp$_85 = tmp$_84.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_83 = '';
      }
       else {
        tmp$_83 = '<br/>';
      }
      tmp$_84.innerHTML = tmp$_85 + (tmp$_83 + '\u7DE8\u8F2F: ');
      tmp$_89 = (tmp$_88 = (tmp$_87 = (tmp$_86 = programme.credits) != null ? tmp$_86.editors : null) != null ? tmp$_87.size : null) != null ? tmp$_88 : 0;
      for (var i_5 = 0; i_5 < tmp$_89; i_5++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_92 = (tmp$_91 = (tmp$_90 = programme.credits) != null ? tmp$_90.editors : null) != null ? getOrNull(tmp$_91, i_5) : null) != null ? tmp$_92 : '') + ' ');
      }
    }
    if (((tmp$_95 = (tmp$_94 = (tmp$_93 = programme.credits) != null ? tmp$_93.presenters : null) != null ? tmp$_94.size : null) != null ? tmp$_95 : 0) > 0) {
      tmp$_97 = this.programmeInformationCredit_0;
      tmp$_98 = tmp$_97.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_96 = '';
      }
       else {
        tmp$_96 = '<br/>';
      }
      tmp$_97.innerHTML = tmp$_98 + (tmp$_96 + '\u4E3B\u6301: ');
      tmp$_102 = (tmp$_101 = (tmp$_100 = (tmp$_99 = programme.credits) != null ? tmp$_99.presenters : null) != null ? tmp$_100.size : null) != null ? tmp$_101 : 0;
      for (var i_6 = 0; i_6 < tmp$_102; i_6++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_105 = (tmp$_104 = (tmp$_103 = programme.credits) != null ? tmp$_103.presenters : null) != null ? getOrNull(tmp$_104, i_6) : null) != null ? tmp$_105 : '') + ' ');
      }
    }
    if (((tmp$_108 = (tmp$_107 = (tmp$_106 = programme.credits) != null ? tmp$_106.commentators : null) != null ? tmp$_107.size : null) != null ? tmp$_108 : 0) > 0) {
      tmp$_110 = this.programmeInformationCredit_0;
      tmp$_111 = tmp$_110.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_109 = '';
      }
       else {
        tmp$_109 = '<br/>';
      }
      tmp$_110.innerHTML = tmp$_111 + (tmp$_109 + '\u8A55\u8AD6\u54E1: ');
      tmp$_115 = (tmp$_114 = (tmp$_113 = (tmp$_112 = programme.credits) != null ? tmp$_112.commentators : null) != null ? tmp$_113.size : null) != null ? tmp$_114 : 0;
      for (var i_7 = 0; i_7 < tmp$_115; i_7++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_118 = (tmp$_117 = (tmp$_116 = programme.credits) != null ? tmp$_116.commentators : null) != null ? getOrNull(tmp$_117, i_7) : null) != null ? tmp$_118 : '') + ' ');
      }
    }
    if (((tmp$_121 = (tmp$_120 = (tmp$_119 = programme.credits) != null ? tmp$_119.guests : null) != null ? tmp$_120.size : null) != null ? tmp$_121 : 0) > 0) {
      tmp$_123 = this.programmeInformationCredit_0;
      tmp$_124 = tmp$_123.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_122 = '';
      }
       else {
        tmp$_122 = '<br/>';
      }
      tmp$_123.innerHTML = tmp$_124 + (tmp$_122 + '\u5609\u8CD3: ');
      tmp$_128 = (tmp$_127 = (tmp$_126 = (tmp$_125 = programme.credits) != null ? tmp$_125.guests : null) != null ? tmp$_126.size : null) != null ? tmp$_127 : 0;
      for (var i_8 = 0; i_8 < tmp$_128; i_8++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_131 = (tmp$_130 = (tmp$_129 = programme.credits) != null ? tmp$_129.guests : null) != null ? getOrNull(tmp$_130, i_8) : null) != null ? tmp$_131 : '') + ' ');
      }
    }
  };
  EPG.prototype.setProgrammeInformationDate_0 = function (programme) {
    this.programmeInformationDate_0.innerHTML = '';
    var date = programme.date;
    if (date != null) {
      this.programmeInformationDate_0.innerHTML = '\u767C\u884C\u671F: ' + date;
    }
  };
  EPG.prototype.setProgrammeInformationCategory_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationCategory_0.innerHTML = '';
    var category = (tmp$_1 = (tmp$_0 = (tmp$ = programme.categorys) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? tmp$_1.category : null;
    if (category != null) {
      this.programmeInformationCategory_0.innerHTML = '\u7247\u985E: ' + category;
    }
  };
  EPG.prototype.setProgrammeInformationKeyword_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationKeyword_0.innerHTML = '';
    var keywordList = (tmp$ = programme.keywords) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null;
    if (keywordList != null) {
      this.programmeInformationKeyword_0.innerHTML = this.programmeInformationKeyword_0.innerHTML + '\u95DC\u9375\u8A5E: ';
      tmp$_0 = keywordList.iterator();
      while (tmp$_0.hasNext()) {
        var keyword = tmp$_0.next();
        if (keyword.keyword != null) {
          this.programmeInformationKeyword_0.innerHTML = this.programmeInformationKeyword_0.innerHTML + (keyword.keyword + ' ');
        }
      }
    }
  };
  EPG.prototype.setProgrammeInformationLanguage_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationLanguage_0.innerHTML = '';
    var languageList = (tmp$ = programme.languages) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null;
    if (languageList != null) {
      this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + '[';
      tmp$_0 = languageList.iterator();
      while (tmp$_0.hasNext()) {
        var language = tmp$_0.next();
        if (language.language != null) {
          if (this.programmeInformationLanguage_0.innerHTML !== '[') {
            this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + '/';
          }
          this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + language.language;
        }
      }
      this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + ']';
    }
  };
  EPG.prototype.setProgrammeInformationOrigLanguage_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationOrigLanguage_0.innerHTML = '';
    var origLanguage = (tmp$_1 = (tmp$_0 = (tmp$ = programme.origLanguages) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? tmp$_1.origLanguage : null;
    if (origLanguage != null) {
      this.programmeInformationOrigLanguage_0.innerHTML = '\u539F\u8A9E\u8A00: ' + origLanguage;
    }
  };
  EPG.prototype.setProgrammeInformationLength_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationLength_0.innerHTML = '';
    var length = (tmp$ = programme.length) != null ? tmp$.length : null;
    if (length != null) {
      this.programmeInformationLength_0.innerHTML = '\u7247\u9577: ' + length + toString((tmp$_1 = (tmp$_0 = programme.length) != null ? tmp$_0.units : null) != null ? tmp$_1 : '');
    }
  };
  EPG.prototype.setProgrammeInformationIcon_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationIcon_0.src = (tmp$_0 = (tmp$ = programme.icon) != null ? tmp$.src : null) != null ? tmp$_0 : 'img/programmeNullIcon.png';
  };
  EPG.prototype.setProgrammeInformationUrl_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.programmeInformationUrl_0.innerHTML = '';
    tmp$_1 = (tmp$_0 = (tmp$ = programme.urls) != null ? tmp$.size : null) != null ? tmp$_0 : 0;
    for (var i = 0; i < tmp$_1; i++) {
      var link = (tmp$_3 = (tmp$_2 = programme.urls) != null ? getOrNull(tmp$_2, i) : null) != null ? tmp$_3 : '';
      this.programmeInformationUrl_0.innerHTML = this.programmeInformationUrl_0.innerHTML + ('<br/><a href=' + '"' + link + '"' + '>' + link + '<\/a>');
    }
  };
  EPG.prototype.setProgrammeInformationCountry_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationCountry_0.innerHTML = '';
    var country = (tmp$_1 = (tmp$_0 = (tmp$ = programme.countrys) != null ? tmp$.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? tmp$_1.country : null;
    if (country != null) {
      this.programmeInformationCountry_0.innerHTML = '\u570B\u5BB6: ' + country;
    }
  };
  function EPG$setProgrammeInformationEpisodeNum$lambda(closure$programme, this$EPG) {
    return function (dialogues) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22;
      var episodeInnerHTML = '';
      var season = (tmp$ = closure$programme.episodeNum) != null ? tmp$.getSeason() : null;
      if (season != null) {
        episodeInnerHTML += (tmp$_2 = (tmp$_1 = (tmp$_0 = dialogues.node) != null ? tmp$_0.programmeSeason : null) != null ? replace(tmp$_1, '${season}', season.toString()) : null) != null ? tmp$_2 : '';
      }
      var episode = (tmp$_3 = closure$programme.episodeNum) != null ? tmp$_3.getEpisode() : null;
      if (episode != null) {
        episodeInnerHTML += (tmp$_6 = (tmp$_5 = (tmp$_4 = dialogues.node) != null ? tmp$_4.programmeEpisode : null) != null ? replace(tmp$_5, '${episode}', episode.toString()) : null) != null ? tmp$_6 : '';
      }
      var part = (tmp$_7 = closure$programme.episodeNum) != null ? tmp$_7.getPart() : null;
      if (part != null) {
        episodeInnerHTML += (tmp$_10 = (tmp$_9 = (tmp$_8 = dialogues.node) != null ? tmp$_8.programmePart : null) != null ? replace(tmp$_9, '${part}', part.toString()) : null) != null ? tmp$_10 : '';
      }
      var totalSeason = (tmp$_11 = closure$programme.episodeNum) != null ? tmp$_11.getTotalSeason() : null;
      if (totalSeason != null) {
        episodeInnerHTML += (tmp$_14 = (tmp$_13 = (tmp$_12 = dialogues.node) != null ? tmp$_12.programmeTotalSeason : null) != null ? replace(tmp$_13, '${totalSeason}', totalSeason.toString()) : null) != null ? tmp$_14 : '';
      }
      var totalEpisode = (tmp$_15 = closure$programme.episodeNum) != null ? tmp$_15.getTotalEpisode() : null;
      if (totalEpisode != null) {
        episodeInnerHTML += (tmp$_18 = (tmp$_17 = (tmp$_16 = dialogues.node) != null ? tmp$_16.programmeTotalEpisode : null) != null ? replace(tmp$_17, '${totalEpisode}', totalEpisode.toString()) : null) != null ? tmp$_18 : '';
      }
      var totalPart = (tmp$_19 = closure$programme.episodeNum) != null ? tmp$_19.getTotalPart() : null;
      if (totalPart != null) {
        episodeInnerHTML += (tmp$_22 = (tmp$_21 = (tmp$_20 = dialogues.node) != null ? tmp$_20.programmeTotalPart : null) != null ? replace(tmp$_21, '${totalPart}', totalPart.toString()) : null) != null ? tmp$_22 : '';
      }
      this$EPG.programmeInformationEpisodeNum_0.innerHTML = episodeInnerHTML;
    };
  }
  EPG.prototype.setProgrammeInformationEpisodeNum_0 = function (programme) {
    Dialogue$Companion_getInstance().getDialogues_fs1aqo$(EPG$setProgrammeInformationEpisodeNum$lambda(programme, this));
  };
  EPG.prototype.setProgrammeInformationVideo_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationAudio_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationPreviouslyShown_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationPreviouslyShown_0.innerHTML = '';
    var previouslyShownDate = (tmp$_0 = (tmp$ = programme.previouslyShown) != null ? tmp$.start : null) != null ? tmp$_0.toLocaleString() : null;
    if (previouslyShownDate != null) {
      this.programmeInformationPreviouslyShown_0.innerHTML = this.programmeInformationPreviouslyShown_0.innerHTML + ('\u4E0A\u6B21\u64AD\u653E\u6642\u9593: ' + previouslyShownDate + '\n');
    }
    var previouslyShownChannel = (tmp$_1 = programme.previouslyShown) != null ? tmp$_1.channel : null;
    if (previouslyShownChannel != null) {
      this.programmeInformationPreviouslyShown_0.innerHTML = this.programmeInformationPreviouslyShown_0.innerHTML + ('\u4E0A\u6B21\u64AD\u653E\u983B\u9053: ' + previouslyShownChannel);
    }
  };
  EPG.prototype.setProgrammeInformationPremiere_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationLastChance_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationNew_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationSubtitles_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationRating_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationStarRating_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationReview_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationBroadcastDateSlot_0 = function (programme) {
    this.programmeInformationBroadcastDateSlot_0.innerHTML = programme.start.toLocaleDateString();
  };
  EPG.prototype.setProgrammeInformationBroadcastTimeSlot_0 = function (programme) {
    var fromTime = padStart(programme.start.getHours().toString(), 2, 48) + ':' + padStart(programme.start.getMinutes().toString(), 2, 48);
    var toTime = padStart(programme.stop.getHours().toString(), 2, 48) + ':' + padStart(programme.stop.getMinutes().toString(), 2, 48);
    this.programmeInformationBroadcastTimeSlot_0.innerHTML = fromTime + '-' + toTime;
  };
  EPG.prototype.setProgrammeInformation_0 = function (programme) {
    this.setProgrammeInformationTitle_0(programme);
    this.setProgrammeInformationSubTitle_0(programme);
    this.setProgrammeInformationDesc_0(programme);
    this.setProgrammeInformationCredit_0(programme);
    this.setProgrammeInformationDate_0(programme);
    this.setProgrammeInformationCategory_0(programme);
    this.setProgrammeInformationKeyword_0(programme);
    this.setProgrammeInformationLanguage_0(programme);
    this.setProgrammeInformationOrigLanguage_0(programme);
    this.setProgrammeInformationLength_0(programme);
    this.setProgrammeInformationIcon_0(programme);
    this.setProgrammeInformationUrl_0(programme);
    this.setProgrammeInformationCountry_0(programme);
    this.setProgrammeInformationEpisodeNum_0(programme);
    this.setProgrammeInformationVideo_0(programme);
    this.setProgrammeInformationAudio_0(programme);
    this.setProgrammeInformationPreviouslyShown_0(programme);
    this.setProgrammeInformationPremiere_0(programme);
    this.setProgrammeInformationLastChance_0(programme);
    this.setProgrammeInformationNew_0(programme);
    this.setProgrammeInformationSubtitles_0(programme);
    this.setProgrammeInformationRating_0(programme);
    this.setProgrammeInformationStarRating_0(programme);
    this.setProgrammeInformationReview_0(programme);
    this.setProgrammeInformationBroadcastDateSlot_0(programme);
    this.setProgrammeInformationBroadcastTimeSlot_0(programme);
  };
  EPG.prototype.nowDateWithoutMinute_0 = function () {
    return new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), (new Date()).getHours());
  };
  EPG.prototype.addDay_0 = function (dateForChange, numberOfDay) {
    return new Date(dateForChange.getTime() + ((((numberOfDay * 24 | 0) * 60 | 0) * 60 | 0) * 1000 | 0));
  };
  var Math_0 = Math;
  EPG.prototype.dateToDateDifferenceMinute_0 = function (fromDate, toDate) {
    var x = toDate.getTime() - fromDate.getTime();
    var differenceTime = Math_0.abs(x);
    var x_0 = differenceTime / 60000;
    return numberToInt(Math_0.ceil(x_0));
  };
  EPG.prototype.oneHourLengthPX_0 = function () {
    return this.programmeListTable_0.scrollWidth / (this.dateToDateDifferenceMinute_0(this.fromDate_0, this.toDate_0) / 60 | 0) | 0;
  };
  EPG.prototype.getDateByProgrammeListTableScrollLeft_0 = function (scrollLeftValue) {
    var numberOfHour = (scrollLeftValue - scrollLeftValue % this.oneHourLengthPX_0()) / this.oneHourLengthPX_0();
    var currentScrollValueTime = numberOfHour * 60 * 60 * 1000;
    return new Date(this.fromDate_0.getTime() + currentScrollValueTime);
  };
  function EPG$setProgrammeListCurrentDisplayDate$lambda(this$EPG) {
    return function (event) {
      this$EPG.programmeListCurrentDisplayDate_0.innerHTML = this$EPG.getDateByProgrammeListTableScrollLeft_0(this$EPG.programmeListTable_0.scrollLeft).toLocaleDateString();
    };
  }
  EPG.prototype.setProgrammeListCurrentDisplayDate_0 = function () {
    this.programmeListCurrentDisplayDate_0.innerHTML = this.fromDate_0.toLocaleDateString();
    this.programmeListTable_0.onscroll = EPG$setProgrammeListCurrentDisplayDate$lambda(this);
  };
  EPG.prototype.setProgrammeListTimeLine_0 = function () {
    var content = '';
    content += '<div>';
    var increaseHour = 0;
    while (this.fromDate_0.getTime() + (((increaseHour * 60 | 0) * 60 | 0) * 1000 | 0) < this.toDate_0.getTime()) {
      var hour = padStart((new Date(this.fromDate_0.getTime() + (((increaseHour * 60 | 0) * 60 | 0) * 1000 | 0))).getHours().toString(), 2, 48);
      content += '<div class="time"><button>' + hour + ':00<\/button><\/div>';
      content += '<div class="time"><button>' + hour + ':30<\/button><\/div>';
      increaseHour = increaseHour + 1 | 0;
    }
    content += '<\/div>';
    this.programmeListTimeLine_0.innerHTML = content;
  };
  EPG.prototype.setProgrammeListChannelList_0 = function () {
    var tmp$;
    var content = '';
    tmp$ = get_tvChannels().iterator();
    while (tmp$.hasNext()) {
      var tvChannel = tmp$.next();
      content += '<div>';
      content += '<div class="channelNumber"><button>' + padStart(tvChannel.number.toString(), 3, 48) + '<\/button><\/div>';
      content += '<div class="channelName"><button>' + tvChannel.name + '<\/button><\/div>';
      content += '<\/div>';
    }
    this.programmeListChannelList_0.innerHTML = content;
  };
  function EPG$addProgrammeOnTimeLine$lambda(closure$programme, this$EPG) {
    return function (event) {
      this$EPG.setProgrammeInformation_0(closure$programme);
    };
  }
  EPG.prototype.addProgrammeOnTimeLine_0 = function (timeLine, tvChannel, programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (this.fromDate_0.getTime() < programme.start.getTime()) {
      tmp$ = programme.start;
    }
     else {
      tmp$ = this.fromDate_0;
    }
    var addProgrammeFromTime = tmp$;
    if (programme.stop.getTime() < this.toDate_0.getTime()) {
      tmp$_0 = programme.stop;
    }
     else {
      tmp$_0 = this.toDate_0;
    }
    var addProgrammeToTime = tmp$_0;
    var timeLength = this.dateToDateDifferenceMinute_0(addProgrammeFromTime, addProgrammeToTime);
    var title = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = programme.titles) != null ? tmp$_1.getElementsByLanguage_qj8e4y$(userLanguageList) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? tmp$_3.title : null) != null ? tmp$_4 : '';
    var div = Kotlin.isType(tmp$_5 = document.createElement('div'), HTMLDivElement) ? tmp$_5 : throwCCE();
    var button = Kotlin.isType(tmp$_6 = document.createElement('button'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    addClass(div, ['programme']);
    div.style.width = '' + toString(timeLength) + 'vh';
    button.onfocus = EPG$addProgrammeOnTimeLine$lambda(programme, this);
    button.tabIndex = (tmp$_8 = toIntOrNull(Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(new Tab3dIndex((tmp$_7 = toIntOrNull(padStart(programme.start.getDate().toString(), 2, 48) + padStart(programme.start.getHours().toString(), 2, 48))) != null ? tmp$_7 : 0, tvChannel.number, this.tabIndexZ_0)))) != null ? tmp$_8 : 0;
    button.innerHTML = title;
    div.append(button);
    timeLine.append(div);
  };
  function EPG$loadProgrammeListTableContentChannelProgrammeTimeLine$lambda(closure$tvChannel, this$EPG) {
    return function (xmltv) {
      var tmp$;
      if (xmltv.programmes == null) {
        return;
      }
      var id = 'channel' + closure$tvChannel.number + 'ProgrammeTimeLine';
      var timeLine = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
      timeLine.innerHTML = '';
      var currentSettedLastTime = this$EPG.fromDate_0;
      var nextProgrammeStartTime = this$EPG.fromDate_0;
      while (currentSettedLastTime.getTime() < this$EPG.toDate_0.getTime()) {
        var addToShowProgramme = xmltv.programmes.getProgrammeByTime_qjzqsm$(currentSettedLastTime);
        if (addToShowProgramme != null) {
          nextProgrammeStartTime = addToShowProgramme.stop;
        }
         else {
          addToShowProgramme = xmltv.programmes.getClosestNextProgrammeByTime_qjzqsm$(currentSettedLastTime);
          if (addToShowProgramme != null) {
            if (addToShowProgramme.start.getTime() < this$EPG.toDate_0.getTime()) {
              nextProgrammeStartTime = addToShowProgramme.stop;
            }
             else {
              nextProgrammeStartTime = this$EPG.toDate_0;
            }
          }
           else {
            nextProgrammeStartTime = this$EPG.toDate_0;
          }
          addToShowProgramme = new XMLTV$Programme(currentSettedLastTime, nextProgrammeStartTime, void 0, void 0, void 0, void 0, void 0, XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_0([new XMLTV$Programme$Title(void 0, '\u6B64\u6642\u6BB5\u7121\u8CC7\u8A0A')]));
        }
        this$EPG.addProgrammeOnTimeLine_0(timeLine, closure$tvChannel, addToShowProgramme);
        currentSettedLastTime = nextProgrammeStartTime;
      }
    };
  }
  EPG.prototype.loadProgrammeListTableContentChannelProgrammeTimeLine_0 = function (tvChannel) {
    tvChannel.information.getXMLTV_29qkou$(EPG$loadProgrammeListTableContentChannelProgrammeTimeLine$lambda(tvChannel, this));
  };
  function EPG$setProgrammeListTable$lambda() {
    jQuery('#epgProgrammeListChannelList').scrollTop(jQuery(this).scrollTop());
    jQuery('#epgProgrammeListTimeLine').scrollLeft(jQuery(this).scrollLeft());
  }
  function EPG$setProgrammeListTable$lambda_0(this$EPG) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getClosestNextProgrammeByTime_qjzqsm$(new Date()) : null;
      if (tmp$_0 == null) {
        return;
      }
      var firstFocusProgramme = tmp$_0;
      var firstFocusTabIndex = Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(new Tab3dIndex((tmp$_1 = toIntOrNull(padStart(firstFocusProgramme.start.getDate().toString(), 2, 48) + padStart(firstFocusProgramme.start.getHours().toString(), 2, 48))) != null ? tmp$_1 : 0, (tmp$_3 = (tmp$_2 = get_tvChannels().node) != null ? tmp$_2.number : null) != null ? tmp$_3 : 0, this$EPG.tabIndexZ_0));
      (Kotlin.isType(tmp$_4 = document.querySelector('[tabindex=' + '"' + firstFocusTabIndex + '"' + ']'), HTMLElement) ? tmp$_4 : throwCCE()).focus();
    };
  }
  EPG.prototype.setProgrammeListTable_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    jQuery('#epgProgrammeListTable').on('scroll', EPG$setProgrammeListTable$lambda);
    var programmeListTable = Kotlin.isType(tmp$ = document.getElementById('epgProgrammeListTable'), HTMLElement) ? tmp$ : throwCCE();
    var content = '';
    tmp$_0 = get_tvChannels().iterator();
    while (tmp$_0.hasNext()) {
      var tvChannel = tmp$_0.next();
      var id = 'channel' + tvChannel.number + 'ProgrammeTimeLine';
      content += '<div id="' + id + '">';
      content += '<\/div>';
    }
    programmeListTable.innerHTML = content;
    tmp$_1 = get_tvChannels().iterator();
    while (tmp$_1.hasNext()) {
      var tvChannel_0 = tmp$_1.next();
      var id_0 = 'channel' + tvChannel_0.number + 'ProgrammeTimeLine';
      this.addProgrammeOnTimeLine_0(Kotlin.isType(tmp$_2 = document.getElementById(id_0), HTMLDivElement) ? tmp$_2 : throwCCE(), tvChannel_0, new XMLTV$Programme(this.fromDate_0, this.toDate_0, void 0, void 0, void 0, void 0, void 0, XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_0([new XMLTV$Programme$Title(void 0, '\u66AB\u7121\u8CC7\u8A0A')])));
      this.loadProgrammeListTableContentChannelProgrammeTimeLine_0(tvChannel_0);
    }
    (tmp$_6 = (tmp$_4 = (tmp$_3 = get_tvChannels().node) != null ? tmp$_3.information : null) != null ? (tmp$_4.getXMLTV_29qkou$(EPG$setProgrammeListTable$lambda_0(this)), Unit) : null) != null ? tmp$_6 : (Kotlin.isType(tmp$_5 = document.querySelector('[tabindex="399999999"]'), HTMLElement) ? tmp$_5 : throwCCE()).focus();
  };
  EPG.prototype.setProgrammeList_0 = function () {
    this.setProgrammeListCurrentDisplayDate_0();
    this.setProgrammeListTimeLine_0();
    this.setProgrammeListChannelList_0();
    this.setProgrammeListTable_0();
  };
  EPG.prototype.isShow = function () {
    return equals(this.epg_0.style.display, 'block');
  };
  EPG.prototype.show = function () {
    this.epg_0.style.display = 'block';
    this.setDisplayCurrentDateBox_0();
    this.setProgrammeList_0();
  };
  EPG.prototype.hide = function () {
    var tmp$, tmp$_0;
    this.epg_0.style.display = 'none';
    tmp$_0 = (tmp$ = this.updateDisplayCurrentDateBoxTimer_0) != null ? tmp$ : 0;
    window.clearTimeout(tmp$_0);
  };
  function EPG_init$lambda(this$EPG) {
    return function (event) {
      this$EPG.hide();
    };
  }
  EPG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EPG',
    interfaces: []
  };
  var EPG_instance = null;
  function EPG_getInstance() {
    if (EPG_instance === null) {
      new EPG();
    }
    return EPG_instance;
  }
  function EnteringNumberBox() {
    EnteringNumberBox_instance = this;
    this.enteringNumberBox_0 = document.getElementById('enteringNumberBox');
    this.text_0 = document.getElementById('enteringNumberBoxText');
    this.enteringNumberNumber_0 = '';
    this.isenteringNumber_0 = false;
    this.enteringNumberWaitingTime_0 = 3500;
  }
  EnteringNumberBox.prototype.update_0 = function () {
    this.text_0.innerHTML = this.enteringNumberNumber_0;
  };
  EnteringNumberBox.prototype.show_0 = function () {
    this.enteringNumberBox_0.style.display = 'block';
  };
  EnteringNumberBox.prototype.enteringNumberToDesignatedChannelRun_0 = function () {
    this.hide_0();
    designatedChannel(toInt(this.enteringNumberNumber_0));
    this.enteringNumberNumber_0 = '';
    this.isenteringNumber_0 = false;
  };
  function EnteringNumberBox$show$lambda(this$EnteringNumberBox) {
    return function () {
      this$EnteringNumberBox.enteringNumberToDesignatedChannelRun_0();
    };
  }
  EnteringNumberBox.prototype.show_61zpoe$ = function (enteringNumberNumber) {
    if (!this.isenteringNumber_0) {
      window.setTimeout(EnteringNumberBox$show$lambda(this), this.enteringNumberWaitingTime_0);
    }
    this.enteringNumberNumber_0 = this.enteringNumberNumber_0 + enteringNumberNumber;
    this.isenteringNumber_0 = true;
    this.update_0();
    this.show_0();
  };
  EnteringNumberBox.prototype.hide_0 = function () {
    this.enteringNumberBox_0.style.display = 'none';
  };
  EnteringNumberBox.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EnteringNumberBox',
    interfaces: []
  };
  var EnteringNumberBox_instance = null;
  function EnteringNumberBox_getInstance() {
    if (EnteringNumberBox_instance === null) {
      new EnteringNumberBox();
    }
    return EnteringNumberBox_instance;
  }
  function FullScreenButton() {
    FullScreenButton_instance = this;
    var tmp$;
    this.fullScreenButton_0 = Kotlin.isType(tmp$ = document.getElementById('fullScreenButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.enterFullscreenIcon_0 = '<i class="icon-font">&#xe80c;<\/i>';
    this.exitFullscreenIcon_0 = '<i class="icon-font">&#xe80b;<\/i>';
    this.fullScreenButton_0.onclick = FullScreenButton_init$lambda(this);
  }
  FullScreenButton.prototype.show = function () {
    this.fullScreenButton_0.style.display = 'block';
  };
  FullScreenButton.prototype.hide = function () {
    this.fullScreenButton_0.style.display = 'none';
  };
  FullScreenButton.prototype.enterFullscreen = function () {
    var element = document.body;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
     else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
     else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
     else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };
  FullScreenButton.prototype.exitFullscreen = function () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
     else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
     else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
     else if (document.msExitFullscreen)
      document.msExitFullscreen();
  };
  FullScreenButton.prototype.isFullscreen = function () {
    return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) != undefined;
  };
  function FullScreenButton_init$lambda(this$FullScreenButton) {
    return function (event) {
      if (this$FullScreenButton.isFullscreen()) {
        this$FullScreenButton.exitFullscreen();
        this$FullScreenButton.fullScreenButton_0.innerHTML = this$FullScreenButton.enterFullscreenIcon_0;
      }
       else {
        this$FullScreenButton.enterFullscreen();
        this$FullScreenButton.fullScreenButton_0.innerHTML = this$FullScreenButton.exitFullscreenIcon_0;
      }
    };
  }
  FullScreenButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FullScreenButton',
    interfaces: []
  };
  var FullScreenButton_instance = null;
  function FullScreenButton_getInstance() {
    if (FullScreenButton_instance === null) {
      new FullScreenButton();
    }
    return FullScreenButton_instance;
  }
  function InDisplayMutedButton() {
    InDisplayMutedButton_instance = this;
    var tmp$;
    this.inDisplayMutedButton_0 = Kotlin.isType(tmp$ = document.getElementById('inDisplayMutedButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.inDisplayMutedButton_0.onclick = InDisplayMutedButton_init$lambda;
  }
  InDisplayMutedButton.prototype.update = function () {
    if (get_player().muted) {
      this.show_0();
    }
     else {
      this.hide_0();
    }
  };
  InDisplayMutedButton.prototype.show_0 = function () {
    this.inDisplayMutedButton_0.style.display = 'block';
  };
  InDisplayMutedButton.prototype.hide_0 = function () {
    this.inDisplayMutedButton_0.style.display = 'none';
  };
  function InDisplayMutedButton_init$lambda(event) {
    get_player().muted = !get_player().muted;
  }
  InDisplayMutedButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InDisplayMutedButton',
    interfaces: []
  };
  var InDisplayMutedButton_instance = null;
  function InDisplayMutedButton_getInstance() {
    if (InDisplayMutedButton_instance === null) {
      new InDisplayMutedButton();
    }
    return InDisplayMutedButton_instance;
  }
  function LoadFile() {
    LoadFile_instance = this;
  }
  function LoadFile$load$lambda(closure$xmlhttp, closure$onLoadedFile) {
    return function (event) {
      var tmp$, tmp$_0;
      if (closure$xmlhttp.readyState === (typeof (tmp$ = 4) === 'number' ? tmp$ : throwCCE()) && closure$xmlhttp.status === (typeof (tmp$_0 = 200) === 'number' ? tmp$_0 : throwCCE())) {
        closure$onLoadedFile(closure$xmlhttp);
      }
    };
  }
  LoadFile.prototype.load_phn05g$ = function (filePath, onLoadedFile) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = LoadFile$load$lambda(xmlhttp, onLoadedFile);
    xmlhttp.open('GET', filePath, true);
    xmlhttp.send();
  };
  LoadFile.prototype.load_61zpoe$ = function (filePath) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', filePath, false);
    xmlhttp.send();
    return xmlhttp;
  };
  LoadFile.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoadFile',
    interfaces: []
  };
  var LoadFile_instance = null;
  function LoadFile_getInstance() {
    if (LoadFile_instance === null) {
      new LoadFile();
    }
    return LoadFile_instance;
  }
  var jQuery;
  var userLanguageList;
  var tvChannels;
  function get_tvChannels() {
    if (tvChannels == null)
      return throwUPAE('tvChannels');
    return tvChannels;
  }
  function set_tvChannels(tvChannels_0) {
    tvChannels = tvChannels_0;
  }
  var player;
  function get_player() {
    if (player == null)
      return throwUPAE('player');
    return player;
  }
  function set_player(player_0) {
    player = player_0;
  }
  function designatedChannel$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  function designatedChannel(channelNumber) {
    var tmp$;
    var channelNumberNodeID = null;
    tmp$ = get_tvChannels().size;
    for (var i = 0; i < tmp$; i++) {
      var tvChannel = getOrNull(get_tvChannels(), i);
      if (tvChannel != null) {
        if (tvChannel.number === channelNumber) {
          channelNumberNodeID = i;
        }
      }
    }
    if (channelNumberNodeID != null) {
      get_tvChannels().designated_za3lpa$(channelNumberNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(designatedChannel$lambda);
      return false;
    }
  }
  function updateChannel$ObjectLiteral() {
    this.currentPlayer_0 = null;
    this.isPlaying_0 = false;
  }
  function updateChannel$ObjectLiteral$on$lambda(this$) {
    return function () {
      if (!this$.isPlaying_0 && equals(get_player(), this$.currentPlayer_0)) {
        updateChannel();
      }
    };
  }
  updateChannel$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    switch (onPlayerEvent.name) {
      case 'playing':
        this.currentPlayer_0 = get_player();
        this.isPlaying_0 = true;
        VirtualRemote_getInstance().update();
        break;
      case 'notPlaying':
        this.isPlaying_0 = false;
        window.setTimeout(updateChannel$ObjectLiteral$on$lambda(this), 15000);
        break;
      case 'videoTrackChanged':
      case 'audioTrackChanged':
      case 'subtitleTrackChanged':
        VirtualRemote_getInstance().update();
        break;
      case 'volumeChanged':
        AudioDescription_getInstance().show_za3lpa$(3000);
        break;
      case 'mutedChanged':
        InDisplayMutedButton_getInstance().update();
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  updateChannel$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function updateChannel() {
    var tmp$;
    set_player(new Player((tmp$ = get_tvChannels().node) != null ? tmp$ : new TVChannel()));
    get_player().addOnPlayerEventListener_j8fzjz$(new updateChannel$ObjectLiteral());
    VirtualRemote_getInstance().update();
  }
  function main$lambda$ObjectLiteral() {
  }
  main$lambda$ObjectLiteral.prototype.OnNodeIDChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    updateChannel();
    ChannelInformation_getInstance().show_za3lpa$(3000);
  };
  main$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function main$lambda(tvChannels_) {
    var tmp$;
    set_tvChannels(tvChannels_);
    get_tvChannels().addOnNodeEventListener_ljxrtv$(new main$lambda$ObjectLiteral());
    updateChannel();
    ChannelInformation_getInstance().show_za3lpa$(3000);
    (Kotlin.isType(tmp$ = document.querySelector('[tabindex="100000002"]'), HTMLElement) ? tmp$ : throwCCE()).focus();
  }
  function main(args) {
    try {
      UserControlPanel_getInstance();
      ConsentPanel_getInstance();
    }
     catch (e) {
      println('\u4ECB\u9762\u521D\u59CB\u5316\u54C0\u5DE6: ' + e.toString());
    }
    TVChannel$Companion_getInstance().getTVChannels_94t8aj$(main$lambda);
  }
  function Modernizr_0() {
    Modernizr_instance = this;
    !function (A, e) {
      function o(A, e) {
        return typeof A === e;
      }
      function n() {
        var A, e, n, t, a, c, R;
        for (var E in i) {
          if (A = [], e = i[E], e.name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
            for (n = 0; n < e.options.aliases.length; n++)
              A.push(e.options.aliases[n].toLowerCase());
          for (t = o(e.fn, 'function') ? e.fn() : e.fn, a = 0; a < A.length; a++)
            c = A[a], R = c.split('.'), 1 === R.length ? (Modernizr[R[0]] = t) : (!Modernizr[R[0]] || Modernizr[R[0]] instanceof Boolean || (Modernizr[R[0]] = new Boolean(Modernizr[R[0]])), Modernizr[R[0]][R[1]] = t), l.push((t ? '' : 'no-') + R.join('-'));
        }
      }
      function t(A) {
        var e = R.className, o = Modernizr._config.classPrefix || '';
        if (Modernizr._config.enableJSClass) {
          var n = new RegExp('(^|\\s)' + o + 'no-js(\\s|$)');
          e = e.replace(n, '$1' + o + 'js$2');
        }
        Modernizr._config.enableClasses && (e += ' ' + o + A.join(' ' + o), R.className = e);
      }
      function a(A, e) {
        if ('object' == typeof A)
          for (var o in A)
            s(A, o) && a(o, A[o]);
        else {
          A = A.toLowerCase();
          var n = A.split('.'), i = Modernizr[n[0]];
          if (2 == n.length && (i = i[n[1]]), 'undefined' != typeof i)
            return Modernizr;
          e = 'function' == typeof e ? e() : e, 1 == n.length ? (Modernizr[n[0]] = e) : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = e), t([(e && 0 != e ? '' : 'no-') + n.join('-')]), Modernizr._trigger(A, e);
        }
        return Modernizr;
      }
      var i = [], c = {_version: '3.0.0-alpha.3', _config: {classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0}, _q: [], on: function (A, e) {
        var o = this;
        setTimeout(function () {
          e(o[A]);
        }, 0);
      }, addTest: function (A, e, o) {
        i.push({name: A, fn: e, options: o});
      }, addAsyncTest: function (A) {
        i.push({name: null, fn: A});
      }}, Modernizr = function () {
      };
      Modernizr.prototype = c, Modernizr = new Modernizr();
      var l = [], R = e.documentElement, E = function () {
        return 'function' != typeof e.createElement ? e.createElement(arguments[0]) : e.createElement.apply(e, arguments);
      };
      Modernizr.addTest('video', function () {
        var A = E('video'), e = !1;
        try {
          (e = !!A.canPlayType) && (e = new Boolean(e), e.ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ''), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ''));
        }
         catch (o) {
        }
        return e;
      });
      var s;
      (function () {
        var A = {}.hasOwnProperty;
        s = o(A, 'undefined') || o(A.call, 'undefined') ? function (A, e) {
          return e in A && o(A.constructor.prototype[e], 'undefined');
        } : function (e, o) {
          return A.call(e, o);
        };
      }(), c._l = {}, c.on = function (A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), Modernizr.hasOwnProperty(A) && setTimeout(function () {
          Modernizr._trigger(A, Modernizr[A]);
        }, 0);
      }, c._trigger = function (A, e) {
        if (this._l[A]) {
          var o = this._l[A];
          setTimeout(function () {
            var A, n;
            for (A = 0; A < o.length; A++)
              (n = o[A])(e);
          }, 0), delete this._l[A];
        }
      }, Modernizr._q.push(function () {
        c.addTest = a;
      }), Modernizr.addAsyncTest(function () {
        var A, e = 300, o = E('video'), n = o.style, t = function (e) {
          clearTimeout(A), o.removeEventListener('playing', t), a('videoautoplay', e && 'playing' === e.type || 0 !== o.currentTime), o.parentNode.removeChild(o);
        };
        if (!(Modernizr.video && 'autoplay' in o))
          return void a('videoautoplay', !1);
        n.position = 'absolute', n.height = 0, n.width = 0;
        try {
          if (Modernizr.video.ogg)
            o.src = 'data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A';
          else {
            if (!Modernizr.video.h264)
              return void a('videoautoplay', !1);
            o.src = 'data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU';
          }
        }
         catch (i) {
          return void a('videoautoplay', !1);
        }
        o.setAttribute('autoplay', ''), o.style = 'display:none', R.appendChild(o), setTimeout(function () {
          o.addEventListener('playing', t), A = setTimeout(t, e);
        }, 0);
      }), n(), delete c.addTest, delete c.addAsyncTest);
      for (var r = 0; r < Modernizr._q.length; r++)
        Modernizr._q[r]();
      A.Modernizr = Modernizr;
    }(window, document);
  }
  function Modernizr$checkVideoAutoPlay$lambda(closure$onSupportAutoplay, closure$onNotSupportAutoplay) {
    return function (result) {
      if (result) {
        closure$onSupportAutoplay();
      }
       else {
        closure$onNotSupportAutoplay();
      }
    };
  }
  Modernizr_0.prototype.checkVideoAutoPlay_9dmrm4$ = function (onSupportAutoplay, onNotSupportAutoplay) {
    var modernizr = Modernizr;
    modernizr.on('videoautoplay', Modernizr$checkVideoAutoPlay$lambda(onSupportAutoplay, onNotSupportAutoplay));
  };
  Modernizr_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Modernizr',
    interfaces: []
  };
  var Modernizr_instance = null;
  function Modernizr_getInstance() {
    if (Modernizr_instance === null) {
      new Modernizr_0();
    }
    return Modernizr_instance;
  }
  function PictureInPictureButton() {
    PictureInPictureButton_instance = this;
    var tmp$;
    this.pictureInPictureButton_0 = Kotlin.isType(tmp$ = document.getElementById('pictureInPictureButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.iframePlayer_0 = document.getElementById('iframePlayer');
    this.hide();
  }
  function PictureInPictureButton$findIframeVideoElement$lambda(closure$iframe, closure$onFindedVideoElement, this$PictureInPictureButton) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
      if (((tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = closure$iframe.contentWindow) != null ? tmp$.document : null) != null ? tmp$_0.getElementsByTagName('video') : null) != null ? tmp$_1.length : null) != null ? tmp$_2 : 0) <= 0) {
        if (((tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = closure$iframe.contentWindow) != null ? tmp$_3.document : null) != null ? tmp$_4.getElementsByTagName('iframe') : null) != null ? tmp$_5.length : null) != null ? tmp$_6 : 0) <= 0) {
          console.log('Not find VideoElement');
        }
         else {
          var subIframe = (tmp$_9 = (tmp$_8 = (tmp$_7 = closure$iframe.contentWindow) != null ? tmp$_7.document : null) != null ? tmp$_8.getElementsByTagName('iframe') : null) != null ? tmp$_9[0] : null;
          if (subIframe != null) {
            tmp$_11 = Kotlin.isType(tmp$_10 = subIframe, HTMLIFrameElement) ? tmp$_10 : throwCCE();
            this$PictureInPictureButton.findIframeVideoElement_qp7qry$(tmp$_11, closure$onFindedVideoElement);
          }
        }
      }
       else {
        var video = (tmp$_14 = (tmp$_13 = (tmp$_12 = closure$iframe.contentWindow) != null ? tmp$_12.document : null) != null ? tmp$_13.getElementsByTagName('video') : null) != null ? tmp$_14[0] : null;
        if (video != null) {
          closure$onFindedVideoElement(Kotlin.isType(tmp$_15 = video, HTMLVideoElement) ? tmp$_15 : throwCCE());
        }
      }
    };
  }
  PictureInPictureButton.prototype.findIframeVideoElement_qp7qry$ = function (iframe, onFindedVideoElement) {
    var find = PictureInPictureButton$findIframeVideoElement$lambda(iframe, onFindedVideoElement, this);
    find(new Event(new String_0()));
    iframe.onload = find;
  };
  PictureInPictureButton.prototype.show = function () {
    this.pictureInPictureButton_0.style.display = 'block';
  };
  PictureInPictureButton.prototype.hide = function () {
    this.pictureInPictureButton_0.style.display = 'none';
  };
  PictureInPictureButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PictureInPictureButton',
    interfaces: []
  };
  var PictureInPictureButton_instance = null;
  function PictureInPictureButton_getInstance() {
    if (PictureInPictureButton_instance === null) {
      new PictureInPictureButton();
    }
    return PictureInPictureButton_instance;
  }
  function Player(tvChannel) {
    Player$Companion_getInstance();
    this.tvChannel_0 = tvChannel;
    this.iframePlayer_0 = document.getElementById('iframePlayer');
    this.watchingCounter_0 = new WatchingCounter(this.tvChannel_0);
    this.videoTracks_15iau4$_0 = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    this.audioTracks_oydct3$_0 = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    this.subtitleTracks_my27pv$_0 = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    this.makeSureIframePlayerVolumeValueIsChangedTimer_l5fz8d$_0 = 0;
    this.volume_qn3165$_0 = 100.0;
    this.makeSureIframePlayerMutedValueIsChangedTimer_pg07j0$_0 = 0;
    this.muted_u89vz8$_0 = false;
    this.onPlayerEvents_0 = ArrayList_init();
    this.volumeUp = Player$volumeUp$lambda;
    this.volumeDown = Player$volumeDown$lambda;
    this.volumeMute = Player$volumeMute$lambda;
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = Player$Companion_getInstance().indexOfPlayer;
    Player$Companion_getInstance().indexOfPlayer = tmp$ + 1 | 0;
    this.iframePlayer_0.src = (tmp$_1 = (tmp$_0 = this.tvChannel_0.sources.node) != null ? tmp$_0.iFramePlayerSrc : null) != null ? tmp$_1 : 'iframePlayer/videojs_hls.html';
    this.iframePlayer_0.onload = Player_init$lambda(this);
  }
  Object.defineProperty(Player.prototype, 'videoTracks', {
    get: function () {
      return this.videoTracks_15iau4$_0;
    },
    set: function (videoTracks) {
      this.videoTracks_15iau4$_0 = videoTracks;
    }
  });
  Object.defineProperty(Player.prototype, 'audioTracks', {
    get: function () {
      return this.audioTracks_oydct3$_0;
    },
    set: function (audioTracks) {
      this.audioTracks_oydct3$_0 = audioTracks;
    }
  });
  Object.defineProperty(Player.prototype, 'subtitleTracks', {
    get: function () {
      return this.subtitleTracks_my27pv$_0;
    },
    set: function (subtitleTracks) {
      this.subtitleTracks_my27pv$_0 = subtitleTracks;
    }
  });
  Object.defineProperty(Player.prototype, 'makeSureIframePlayerVolumeValueIsChangedTimer_0', {
    get: function () {
      return this.makeSureIframePlayerVolumeValueIsChangedTimer_l5fz8d$_0;
    },
    set: function (value) {
      window.clearInterval(this.makeSureIframePlayerVolumeValueIsChangedTimer_l5fz8d$_0);
      this.makeSureIframePlayerVolumeValueIsChangedTimer_l5fz8d$_0 = value;
    }
  });
  function Player$set_Player$volume$lambda(this$Player, closure$value) {
    return function () {
      var tmp$;
      this$Player.iframePlayer_0.contentWindow.onSetIframePlayerVolume(closure$value);
      var v = closure$value;
      if (100 < v) {
        v = 100.0;
      }
      if (v < 0) {
        v = 0.0;
      }
      if (this$Player.volume === v) {
        window.clearInterval(this$Player.makeSureIframePlayerVolumeValueIsChangedTimer_0);
        localStorage.setItem('RecentlyVolume', this$Player.volume_qn3165$_0.toString());
        this$Player.volume_qn3165$_0 = v;
      }
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$volumeChanged_getInstance());
      }
    };
  }
  Object.defineProperty(Player.prototype, 'volume', {
    get: function () {
      var tmp$;
      return (tmp$ = toDoubleOrNull(this.iframePlayer_0.contentWindow.onGetIframePlayerVolume().toString())) != null ? tmp$ : 100.0;
    },
    set: function (value) {
      var script = Player$set_Player$volume$lambda(this, value);
      script();
      this.makeSureIframePlayerVolumeValueIsChangedTimer_0 = window.setInterval(script, 200);
    }
  });
  Object.defineProperty(Player.prototype, 'makeSureIframePlayerMutedValueIsChangedTimer_0', {
    get: function () {
      return this.makeSureIframePlayerMutedValueIsChangedTimer_pg07j0$_0;
    },
    set: function (value) {
      window.clearInterval(this.makeSureIframePlayerMutedValueIsChangedTimer_pg07j0$_0);
      this.makeSureIframePlayerMutedValueIsChangedTimer_pg07j0$_0 = value;
    }
  });
  function Player$set_Player$muted$lambda(this$Player, closure$value) {
    return function () {
      var tmp$;
      this$Player.iframePlayer_0.contentWindow.onSetIframePlayerMuted(closure$value);
      if (this$Player.muted === closure$value) {
        window.clearInterval(this$Player.makeSureIframePlayerMutedValueIsChangedTimer_0);
        this$Player.muted_u89vz8$_0 = closure$value;
      }
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$mutedChanged_getInstance());
      }
    };
  }
  Object.defineProperty(Player.prototype, 'muted', {
    get: function () {
      return toBoolean(this.iframePlayer_0.contentWindow.onGetIframePlayerMuted().toString());
    },
    set: function (value) {
      var script = Player$set_Player$muted$lambda(this, value);
      script();
      this.makeSureIframePlayerMutedValueIsChangedTimer_0 = window.setInterval(script, 200);
    }
  });
  function Player$OnPlayerEvent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Player$OnPlayerEvent_initFields() {
    Player$OnPlayerEvent_initFields = function () {
    };
    Player$OnPlayerEvent$playing_instance = new Player$OnPlayerEvent('playing', 0);
    Player$OnPlayerEvent$notPlaying_instance = new Player$OnPlayerEvent('notPlaying', 1);
    Player$OnPlayerEvent$videoTrackChanged_instance = new Player$OnPlayerEvent('videoTrackChanged', 2);
    Player$OnPlayerEvent$audioTrackChanged_instance = new Player$OnPlayerEvent('audioTrackChanged', 3);
    Player$OnPlayerEvent$subtitleTrackChanged_instance = new Player$OnPlayerEvent('subtitleTrackChanged', 4);
    Player$OnPlayerEvent$volumeChanged_instance = new Player$OnPlayerEvent('volumeChanged', 5);
    Player$OnPlayerEvent$mutedChanged_instance = new Player$OnPlayerEvent('mutedChanged', 6);
  }
  var Player$OnPlayerEvent$playing_instance;
  function Player$OnPlayerEvent$playing_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$playing_instance;
  }
  var Player$OnPlayerEvent$notPlaying_instance;
  function Player$OnPlayerEvent$notPlaying_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$notPlaying_instance;
  }
  var Player$OnPlayerEvent$videoTrackChanged_instance;
  function Player$OnPlayerEvent$videoTrackChanged_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$videoTrackChanged_instance;
  }
  var Player$OnPlayerEvent$audioTrackChanged_instance;
  function Player$OnPlayerEvent$audioTrackChanged_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$audioTrackChanged_instance;
  }
  var Player$OnPlayerEvent$subtitleTrackChanged_instance;
  function Player$OnPlayerEvent$subtitleTrackChanged_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$subtitleTrackChanged_instance;
  }
  var Player$OnPlayerEvent$volumeChanged_instance;
  function Player$OnPlayerEvent$volumeChanged_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$volumeChanged_instance;
  }
  var Player$OnPlayerEvent$mutedChanged_instance;
  function Player$OnPlayerEvent$mutedChanged_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$mutedChanged_instance;
  }
  Player$OnPlayerEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnPlayerEvent',
    interfaces: [Enum]
  };
  function Player$OnPlayerEvent$values() {
    return [Player$OnPlayerEvent$playing_getInstance(), Player$OnPlayerEvent$notPlaying_getInstance(), Player$OnPlayerEvent$videoTrackChanged_getInstance(), Player$OnPlayerEvent$audioTrackChanged_getInstance(), Player$OnPlayerEvent$subtitleTrackChanged_getInstance(), Player$OnPlayerEvent$volumeChanged_getInstance(), Player$OnPlayerEvent$mutedChanged_getInstance()];
  }
  Player$OnPlayerEvent.values = Player$OnPlayerEvent$values;
  function Player$OnPlayerEvent$valueOf(name) {
    switch (name) {
      case 'playing':
        return Player$OnPlayerEvent$playing_getInstance();
      case 'notPlaying':
        return Player$OnPlayerEvent$notPlaying_getInstance();
      case 'videoTrackChanged':
        return Player$OnPlayerEvent$videoTrackChanged_getInstance();
      case 'audioTrackChanged':
        return Player$OnPlayerEvent$audioTrackChanged_getInstance();
      case 'subtitleTrackChanged':
        return Player$OnPlayerEvent$subtitleTrackChanged_getInstance();
      case 'volumeChanged':
        return Player$OnPlayerEvent$volumeChanged_getInstance();
      case 'mutedChanged':
        return Player$OnPlayerEvent$mutedChanged_getInstance();
      default:throwISE('No enum constant org.sourcekey.hknbp.hknbp_core.Player.OnPlayerEvent.' + name);
    }
  }
  Player$OnPlayerEvent.valueOf_61zpoe$ = Player$OnPlayerEvent$valueOf;
  function Player$OnPlayerEventListener() {
  }
  Player$OnPlayerEventListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnPlayerEventListener',
    interfaces: []
  };
  Player.prototype.addOnPlayerEventListener_j8fzjz$ = function (onPlayerEventListener) {
    this.onPlayerEvents_0.add_11rb$(onPlayerEventListener);
  };
  function Player$onPlaying$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
  }
  Player$onPlaying$ObjectLiteral.prototype.OnNodeIDChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$;
    this.this$Player.iframePlayer_0.contentWindow.onSetIframePlayerVideoTrack(postChangeNode);
    localStorage.setItem('RecentlyChannel' + this.this$Player.tvChannel_0.number + 'VideoTrackID', toString(postChangeNodeID));
    tmp$ = this.this$Player.onPlayerEvents_0.iterator();
    while (tmp$.hasNext()) {
      var event = tmp$.next();
      event.on_mdxcb7$(Player$OnPlayerEvent$videoTrackChanged_getInstance());
    }
  };
  Player$onPlaying$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$onPlaying$ObjectLiteral_0(this$Player) {
    this.this$Player = this$Player;
  }
  Player$onPlaying$ObjectLiteral_0.prototype.OnNodeIDChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$;
    this.this$Player.iframePlayer_0.contentWindow.onSetIframePlayerAudioTrack(postChangeNode);
    localStorage.setItem('RecentlyChannel' + this.this$Player.tvChannel_0.number + 'AudioTrackID', toString(postChangeNodeID));
    tmp$ = this.this$Player.onPlayerEvents_0.iterator();
    while (tmp$.hasNext()) {
      var event = tmp$.next();
      event.on_mdxcb7$(Player$OnPlayerEvent$audioTrackChanged_getInstance());
    }
  };
  Player$onPlaying$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$onPlaying$ObjectLiteral_1(this$Player) {
    this.this$Player = this$Player;
  }
  Player$onPlaying$ObjectLiteral_1.prototype.OnNodeIDChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$;
    this.this$Player.iframePlayer_0.contentWindow.onSetIframePlayerSubtitleTrack(postChangeNode);
    localStorage.setItem('RecentlyChannel' + this.this$Player.tvChannel_0.number + 'SubtitleTrackID', toString(postChangeNodeID));
    tmp$ = this.this$Player.onPlayerEvents_0.iterator();
    while (tmp$.hasNext()) {
      var event = tmp$.next();
      event.on_mdxcb7$(Player$OnPlayerEvent$subtitleTrackChanged_getInstance());
    }
  };
  Player$onPlaying$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$onPlaying$lambda(this$Player) {
    return function () {
      this$Player.muted = false;
    };
  }
  function Player$onPlaying$lambda_0(this$Player) {
    return function () {
      this$Player.muted = true;
    };
  }
  Player.prototype.onPlaying_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    try {
      this.videoTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(this.iframePlayer_0.contentWindow.onGetIframePlayerVideoTracks(), this.iframePlayer_0.contentWindow.onGetIframePlayerVideoTrack());
      this.videoTracks.addOnNodeEventListener_ljxrtv$(new Player$onPlaying$ObjectLiteral(this));
      this.videoTracks.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('RecentlyChannel' + this.tvChannel_0.number + 'VideoTrackID')) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0);
    }
     catch (e) {
      println('\u983B\u9053\u97FFiframe\u7A0B\u5E8F\u672A\u884C\u5B8C\u597D \u6216\u8005 Get\u5514\u5230\u7247\u6E90\u8CC7\u8A0A: ' + e.toString());
      this.videoTracks = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    }
    try {
      this.audioTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(this.iframePlayer_0.contentWindow.onGetIframePlayerAudioTracks(), this.iframePlayer_0.contentWindow.onGetIframePlayerAudioTrack());
      this.audioTracks.addOnNodeEventListener_ljxrtv$(new Player$onPlaying$ObjectLiteral_0(this));
      this.audioTracks.designated_za3lpa$((tmp$_2 = (tmp$_1 = localStorage.getItem('RecentlyChannel' + this.tvChannel_0.number + 'AudioTrackID')) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0);
    }
     catch (e) {
      println('\u983B\u9053\u97FFiframe\u7A0B\u5E8F\u672A\u884C\u5B8C\u597D \u6216\u8005 Get\u5514\u5230\u8072\u9053\u8CC7\u8A0A: ' + e.toString());
      this.audioTracks = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    }
    try {
      this.subtitleTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(this.iframePlayer_0.contentWindow.onGetIframePlayerSubtitleTracks(), this.iframePlayer_0.contentWindow.onGetIframePlayerSubtitleTrack());
      this.subtitleTracks.addOnNodeEventListener_ljxrtv$(new Player$onPlaying$ObjectLiteral_1(this));
      this.subtitleTracks.designated_za3lpa$((tmp$_4 = (tmp$_3 = localStorage.getItem('RecentlyChannel' + this.tvChannel_0.number + 'SubtitleTrackID')) != null ? toIntOrNull(tmp$_3) : null) != null ? tmp$_4 : 0);
    }
     catch (e) {
      println('\u983B\u9053\u97FFiframe\u7A0B\u5E8F\u672A\u884C\u5B8C\u597D \u6216\u8005 Get\u5514\u5230\u5B57\u5E55\u8CC7\u8A0A \u6216\u8005 \u983B\u9053\u5187\u5B57\u5E55: ' + e.toString());
      this.subtitleTracks = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    }
    try {
      this.iframePlayer_0.contentWindow.onSetIframePlayerVolume((tmp$_6 = (tmp$_5 = localStorage.getItem('RecentlyVolume')) != null ? toDoubleOrNull(tmp$_5) : null) != null ? tmp$_6 : 100.0);
    }
     catch (e) {
      println('\u983B\u9053\u97FFiframe\u7A0B\u5E8F\u672A\u884C\u5B8C\u597D \u6216\u8005 Get\u5514\u5230\u97F3\u91CF\u8CC7\u8A0A: ' + e.toString());
    }
    try {
      if (1 < Player$Companion_getInstance().indexOfPlayer) {
        this.muted = false;
      }
       else {
        Modernizr_getInstance().checkVideoAutoPlay_9dmrm4$(Player$onPlaying$lambda(this), Player$onPlaying$lambda_0(this));
      }
    }
     catch (e) {
      println('\u983B\u9053\u97FFiframe\u7A0B\u5E8F\u672A\u884C\u5B8C\u597D \u6216\u8005 Get\u5514\u5230\u975C\u97F3\u8CC7\u8A0A: ' + e.toString());
    }
    tmp$_7 = this.onPlayerEvents_0.iterator();
    while (tmp$_7.hasNext()) {
      var event = tmp$_7.next();
      event.on_mdxcb7$(Player$OnPlayerEvent$playing_getInstance());
    }
  };
  Player.prototype.onNotPlaying_0 = function () {
    var tmp$;
    tmp$ = this.onPlayerEvents_0.iterator();
    while (tmp$.hasNext()) {
      var event = tmp$.next();
      event.on_mdxcb7$(Player$OnPlayerEvent$notPlaying_getInstance());
    }
  };
  Player.prototype.nextVideoTrack = function () {
    get_player().videoTracks.next();
  };
  Player.prototype.previousVideoTrack = function () {
    get_player().videoTracks.previous();
  };
  function Player$designatedVideoTrack$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedVideoTrack = function (videoTrackID) {
    var videoTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(get_player().videoTracks, videoTrackID);
    if (videoTracksNodeID != null) {
      get_player().videoTracks.designated_za3lpa$(videoTracksNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(Player$designatedVideoTrack$lambda);
      return false;
    }
  };
  Player.prototype.nextAudioTrack = function () {
    get_player().audioTracks.next();
  };
  Player.prototype.previousAudioTrack = function () {
    get_player().audioTracks.previous();
  };
  function Player$designatedAudioTrack$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedAudioTrack = function (audioTrackID) {
    var audioTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(get_player().audioTracks, audioTrackID);
    if (audioTracksNodeID != null) {
      get_player().audioTracks.designated_za3lpa$(audioTracksNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(Player$designatedAudioTrack$lambda);
      return false;
    }
  };
  Player.prototype.nextSubtitleTrack = function () {
    get_player().subtitleTracks.next();
  };
  Player.prototype.previousSubtitleTrack = function () {
    get_player().subtitleTracks.previous();
  };
  function Player$designatedSubtitleTrack$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedSubtitleTrack = function (subtitleTrackID) {
    var subtitleTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(get_player().subtitleTracks, subtitleTrackID);
    if (subtitleTracksNodeID != null) {
      get_player().subtitleTracks.designated_za3lpa$(subtitleTracksNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(Player$designatedSubtitleTrack$lambda);
      return false;
    }
  };
  Player.prototype.programmable = function (color) {
  };
  Player.prototype.enableProgrammable = function () {
  };
  Player.prototype.disableProgrammable = function () {
  };
  function Player$ProgrammableColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Player$ProgrammableColor_initFields() {
    Player$ProgrammableColor_initFields = function () {
    };
    Player$ProgrammableColor$red_instance = new Player$ProgrammableColor('red', 0);
    Player$ProgrammableColor$green_instance = new Player$ProgrammableColor('green', 1);
    Player$ProgrammableColor$yellow_instance = new Player$ProgrammableColor('yellow', 2);
    Player$ProgrammableColor$blue_instance = new Player$ProgrammableColor('blue', 3);
  }
  var Player$ProgrammableColor$red_instance;
  function Player$ProgrammableColor$red_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$red_instance;
  }
  var Player$ProgrammableColor$green_instance;
  function Player$ProgrammableColor$green_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$green_instance;
  }
  var Player$ProgrammableColor$yellow_instance;
  function Player$ProgrammableColor$yellow_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$yellow_instance;
  }
  var Player$ProgrammableColor$blue_instance;
  function Player$ProgrammableColor$blue_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$blue_instance;
  }
  Player$ProgrammableColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgrammableColor',
    interfaces: [Enum]
  };
  function Player$ProgrammableColor$values() {
    return [Player$ProgrammableColor$red_getInstance(), Player$ProgrammableColor$green_getInstance(), Player$ProgrammableColor$yellow_getInstance(), Player$ProgrammableColor$blue_getInstance()];
  }
  Player$ProgrammableColor.values = Player$ProgrammableColor$values;
  function Player$ProgrammableColor$valueOf(name) {
    switch (name) {
      case 'red':
        return Player$ProgrammableColor$red_getInstance();
      case 'green':
        return Player$ProgrammableColor$green_getInstance();
      case 'yellow':
        return Player$ProgrammableColor$yellow_getInstance();
      case 'blue':
        return Player$ProgrammableColor$blue_getInstance();
      default:throwISE('No enum constant org.sourcekey.hknbp.hknbp_core.Player.ProgrammableColor.' + name);
    }
  }
  Player$ProgrammableColor.valueOf_61zpoe$ = Player$ProgrammableColor$valueOf;
  function Player$Companion() {
    Player$Companion_instance = this;
    this.indexOfPlayer_56ee75$_0 = 0;
  }
  Object.defineProperty(Player$Companion.prototype, 'indexOfPlayer', {
    get: function () {
      return this.indexOfPlayer_56ee75$_0;
    },
    set: function (value) {
      var tmp$;
      if (2 < value) {
        tmp$ = 2;
      }
       else {
        tmp$ = value;
      }
      var index = tmp$;
      this.indexOfPlayer_56ee75$_0 = index;
    }
  });
  Player$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Player$Companion_instance = null;
  function Player$Companion_getInstance() {
    if (Player$Companion_instance === null) {
      new Player$Companion();
    }
    return Player$Companion_instance;
  }
  function Player$volumeUp$lambda() {
    get_player().volume = get_player().volume + 1.0;
    return get_player().volume;
  }
  function Player$volumeDown$lambda() {
    get_player().volume = get_player().volume - 1.0;
    return get_player().volume;
  }
  function Player$volumeMute$lambda() {
    get_player().muted = !get_player().muted;
  }
  function Player_init$lambda$lambda(this$Player) {
    return function () {
      this$Player.onPlaying_0();
    };
  }
  function Player_init$lambda$lambda_0(this$Player) {
    return function () {
      this$Player.onNotPlaying_0();
    };
  }
  function Player_init$lambda(this$Player) {
    return function () {
      var tmp$, tmp$_0;
      try {
        this$Player.iframePlayer_0.contentWindow.onIframePlayerPlaying = Player_init$lambda$lambda(this$Player);
        this$Player.iframePlayer_0.contentWindow.onIframePlayerNotPlaying = Player_init$lambda$lambda_0(this$Player);
        this$Player.iframePlayer_0.contentWindow.onIframePlayerInit((tmp$_0 = (tmp$ = this$Player.tvChannel_0.sources.node) != null ? tmp$.link : null) != null ? tmp$_0 : 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8');
      }
       catch (e) {
        println('iframePlayer\u6709\u5572Function\u6435\u5514\u5230\u6216\u767C\u751F\u554F\u984C: ' + e.toString());
      }
    };
  }
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: []
  };
  function PromptBox() {
    PromptBox_instance = this;
    this.promptBox_0 = document.getElementById('promptBox');
    this.canHideOnPromptMessage_0 = 0;
  }
  PromptBox.prototype.show_0 = function (promptMessage) {
    this.promptBox_0.innerHTML = promptMessage;
    this.promptBox_0.style.display = 'block';
  };
  PromptBox.prototype.hide_0 = function () {
    this.promptBox_0.style.display = 'none';
  };
  function PromptBox$promptMessage$lambda(this$PromptBox) {
    return function () {
      var tmp$;
      tmp$ = this$PromptBox.canHideOnPromptMessage_0;
      this$PromptBox.canHideOnPromptMessage_0 = tmp$ - 1 | 0;
      if (this$PromptBox.canHideOnPromptMessage_0 <= 0) {
        this$PromptBox.hide_0();
        this$PromptBox.canHideOnPromptMessage_0 = 0;
      }
    };
  }
  PromptBox.prototype.promptMessage = function (promptMessage) {
    this.show_0(promptMessage);
    this.canHideOnPromptMessage_0 = this.canHideOnPromptMessage_0 + 1 | 0;
    window.setTimeout(PromptBox$promptMessage$lambda(this), 3500);
  };
  PromptBox.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PromptBox',
    interfaces: []
  };
  var PromptBox_instance = null;
  function PromptBox_getInstance() {
    if (PromptBox_instance === null) {
      new PromptBox();
    }
    return PromptBox_instance;
  }
  function SettingWindow() {
    SettingWindow_instance = this;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    this.settingWindow_0 = Kotlin.isType(tmp$ = document.getElementById('settingWindow'), HTMLDivElement) ? tmp$ : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('settingWindowHideButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.languageSetHonJyutElegantSet_0 = Kotlin.isType(tmp$_1 = document.getElementById('settingWindowLanguageSetHonJyutElegantSet'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.languageSetHonJyutColloquialSet_0 = Kotlin.isType(tmp$_2 = document.getElementById('settingWindowLanguageSetHonJyutColloquialSet'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    this.languageSetEnglishSet_0 = Kotlin.isType(tmp$_3 = document.getElementById('settingWindowLanguageSetEnglishSet'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    this.languageSetPresetSet_0 = Kotlin.isType(tmp$_4 = document.getElementById('settingWindowLanguageSetPresetSet'), HTMLButtonElement) ? tmp$_4 : throwCCE();
    this.languageSetLanguageISOCodeInput_0 = Kotlin.isType(tmp$_5 = document.getElementById('settingWindowLanguageSetLanguageISOCodeInput'), HTMLInputElement) ? tmp$_5 : throwCCE();
    this.languageSelectSequenceList_0 = Kotlin.isType(tmp$_6 = document.getElementById('settingWindowLanguageSelectSequenceList'), HTMLSelectElement) ? tmp$_6 : throwCCE();
    this.languageAddLanguage_0 = Kotlin.isType(tmp$_7 = document.getElementById('settingWindowLanguageAddLanguage'), HTMLButtonElement) ? tmp$_7 : throwCCE();
    this.languageRemoveLanguage_0 = Kotlin.isType(tmp$_8 = document.getElementById('settingWindowLanguageRemoveLanguage'), HTMLButtonElement) ? tmp$_8 : throwCCE();
    this.languageMoveUpLanguage_0 = Kotlin.isType(tmp$_9 = document.getElementById('settingWindowLanguageMoveUpLanguage'), HTMLButtonElement) ? tmp$_9 : throwCCE();
    this.languageMoveDownLanguage_0 = Kotlin.isType(tmp$_10 = document.getElementById('settingWindowLanguageMoveDownLanguage'), HTMLButtonElement) ? tmp$_10 : throwCCE();
    this.currentUserLanguage_0 = typeof (tmp$_11 = navigator.language || navigator.userLanguage) === 'string' ? tmp$_11 : throwCCE();
    this.settingWindow_0.style.cursor = 'auto';
    this.hideButton_0.onclick = SettingWindow_init$lambda(this);
    this.languageAddLanguage_0.onclick = SettingWindow_init$lambda_0(this);
    this.languageRemoveLanguage_0.onclick = SettingWindow_init$lambda_1(this);
    this.languageMoveUpLanguage_0.onclick = SettingWindow_init$lambda_2(this);
    this.languageMoveDownLanguage_0.onclick = SettingWindow_init$lambda_3(this);
    this.languageSetHonJyutElegantSet_0.onclick = SettingWindow_init$lambda_4(this);
    this.languageSetHonJyutColloquialSet_0.onclick = SettingWindow_init$lambda_5(this);
    this.languageSetEnglishSet_0.onclick = SettingWindow_init$lambda_6(this);
    this.languageSetPresetSet_0.onclick = SettingWindow_init$lambda_7(this);
    this.languageSelectSequenceList_0.innerHTML = (tmp$_12 = localStorage.getItem('RecentlyLanguageSelectSequence')) != null ? tmp$_12 : '<option value=' + '"' + this.currentUserLanguage_0 + '"' + '>' + this.currentUserLanguage_0 + '<\/option>';
  }
  SettingWindow.prototype.getLanguageSetting = function () {
    var tmp$, tmp$_0;
    var userLanguageList = ArrayList_init();
    tmp$ = this.languageSelectSequenceList_0.length;
    for (var index = 0; index < tmp$; index++) {
      userLanguageList.add_11rb$((Kotlin.isType(tmp$_0 = this.languageSelectSequenceList_0.options[index], HTMLOptionElement) ? tmp$_0 : throwCCE()).text);
    }
    return userLanguageList;
  };
  SettingWindow.prototype.show = function () {
    this.settingWindow_0.style.display = 'block';
  };
  SettingWindow.prototype.hide = function () {
    this.settingWindow_0.style.display = 'none';
  };
  SettingWindow.prototype.createLanguageOption_0 = function (isoCode) {
    var tmp$;
    var option = Kotlin.isType(tmp$ = document.createElement('option'), HTMLOptionElement) ? tmp$ : throwCCE();
    option.text = isoCode;
    option.value = isoCode;
    return option;
  };
  function SettingWindow_init$lambda(this$SettingWindow) {
    return function (event) {
      this$SettingWindow.hide();
    };
  }
  function SettingWindow_init$lambda_0(this$SettingWindow) {
    return function (event) {
      var tmp$;
      if (!equals(this$SettingWindow.languageSetLanguageISOCodeInput_0.value, '')) {
        var option = Kotlin.isType(tmp$ = document.createElement('option'), HTMLOptionElement) ? tmp$ : throwCCE();
        option.text = this$SettingWindow.languageSetLanguageISOCodeInput_0.value;
        option.value = this$SettingWindow.languageSetLanguageISOCodeInput_0.value;
        this$SettingWindow.languageSelectSequenceList_0.add(option);
        localStorage.setItem('RecentlyLanguageSelectSequence', this$SettingWindow.languageSelectSequenceList_0.innerHTML);
      }
    };
  }
  function SettingWindow_init$lambda_1(this$SettingWindow) {
    return function (event) {
      this$SettingWindow.languageSelectSequenceList_0.remove(this$SettingWindow.languageSelectSequenceList_0.selectedIndex);
      localStorage.setItem('RecentlyLanguageSelectSequence', this$SettingWindow.languageSelectSequenceList_0.innerHTML);
    };
  }
  function SettingWindow_init$lambda_2(this$SettingWindow) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1;
      if (0 < this$SettingWindow.languageSelectSequenceList_0.selectedIndex) {
        var optionAIndex = this$SettingWindow.languageSelectSequenceList_0.selectedIndex;
        var optionBIndex = this$SettingWindow.languageSelectSequenceList_0.selectedIndex - 1 | 0;
        var options = ArrayList_init();
        tmp$ = this$SettingWindow.languageSelectSequenceList_0.length;
        for (var index = 0; index < tmp$; index++) {
          options.add_11rb$(Kotlin.isType(tmp$_0 = this$SettingWindow.languageSelectSequenceList_0.options[index], HTMLOptionElement) ? tmp$_0 : throwCCE());
        }
        var optionA = options.get_za3lpa$(optionAIndex);
        var optionB = options.get_za3lpa$(optionBIndex);
        options.set_wxm5ur$(optionAIndex, optionB);
        options.set_wxm5ur$(optionBIndex, optionA);
        this$SettingWindow.languageSelectSequenceList_0.innerHTML = '';
        tmp$_1 = options.size;
        for (var index_0 = 0; index_0 < tmp$_1; index_0++) {
          var option = getOrNull(options, index_0);
          if (option != null) {
            this$SettingWindow.languageSelectSequenceList_0.append(option);
          }
        }
        localStorage.setItem('RecentlyLanguageSelectSequence', this$SettingWindow.languageSelectSequenceList_0.innerHTML);
      }
    };
  }
  function SettingWindow_init$lambda_3(this$SettingWindow) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1;
      if (this$SettingWindow.languageSelectSequenceList_0.selectedIndex < this$SettingWindow.languageSelectSequenceList_0.length) {
        var optionAIndex = this$SettingWindow.languageSelectSequenceList_0.selectedIndex;
        var optionBIndex = this$SettingWindow.languageSelectSequenceList_0.selectedIndex + 1 | 0;
        var options = ArrayList_init();
        tmp$ = this$SettingWindow.languageSelectSequenceList_0.length;
        for (var index = 0; index < tmp$; index++) {
          options.add_11rb$(Kotlin.isType(tmp$_0 = this$SettingWindow.languageSelectSequenceList_0.options[index], HTMLOptionElement) ? tmp$_0 : throwCCE());
        }
        var optionA = options.get_za3lpa$(optionAIndex);
        var optionB = options.get_za3lpa$(optionBIndex);
        options.set_wxm5ur$(optionAIndex, optionB);
        options.set_wxm5ur$(optionBIndex, optionA);
        this$SettingWindow.languageSelectSequenceList_0.innerHTML = '';
        tmp$_1 = options.size;
        for (var index_0 = 0; index_0 < tmp$_1; index_0++) {
          var option = getOrNull(options, index_0);
          if (option != null) {
            this$SettingWindow.languageSelectSequenceList_0.append(option);
          }
        }
        localStorage.setItem('RecentlyLanguageSelectSequence', this$SettingWindow.languageSelectSequenceList_0.innerHTML);
      }
    };
  }
  function SettingWindow_init$lambda_4(this$SettingWindow) {
    return function (event) {
      this$SettingWindow.languageSelectSequenceList_0.innerHTML = '';
      this$SettingWindow.languageSelectSequenceList_0.append(this$SettingWindow.createLanguageOption_0('hon-JyutElegant'), this$SettingWindow.createLanguageOption_0('zh-HK'), this$SettingWindow.createLanguageOption_0('zh-Hant-HK'), this$SettingWindow.createLanguageOption_0('zh-TW'), this$SettingWindow.createLanguageOption_0('zh-Hant-TW'), this$SettingWindow.createLanguageOption_0('zh-Hant'), this$SettingWindow.createLanguageOption_0('hon-JyutColloquial'), this$SettingWindow.createLanguageOption_0('zh-Yue'), this$SettingWindow.createLanguageOption_0(this$SettingWindow.currentUserLanguage_0), this$SettingWindow.createLanguageOption_0('en'));
    };
  }
  function SettingWindow_init$lambda_5(this$SettingWindow) {
    return function (event) {
      this$SettingWindow.languageSelectSequenceList_0.innerHTML = '';
      this$SettingWindow.languageSelectSequenceList_0.append(this$SettingWindow.createLanguageOption_0('hon-JyutColloquial'), this$SettingWindow.createLanguageOption_0('zh-Yue'), this$SettingWindow.createLanguageOption_0('hon-JyutElegant'), this$SettingWindow.createLanguageOption_0('zh-HK'), this$SettingWindow.createLanguageOption_0('zh-Hant-HK'), this$SettingWindow.createLanguageOption_0('zh-TW'), this$SettingWindow.createLanguageOption_0('zh-Hant-TW'), this$SettingWindow.createLanguageOption_0('zh-Hant'), this$SettingWindow.createLanguageOption_0(this$SettingWindow.currentUserLanguage_0), this$SettingWindow.createLanguageOption_0('en'));
    };
  }
  function SettingWindow_init$lambda_6(this$SettingWindow) {
    return function (event) {
      this$SettingWindow.languageSelectSequenceList_0.innerHTML = '';
      this$SettingWindow.languageSelectSequenceList_0.append(this$SettingWindow.createLanguageOption_0('en'), this$SettingWindow.createLanguageOption_0(this$SettingWindow.currentUserLanguage_0));
    };
  }
  function SettingWindow_init$lambda_7(this$SettingWindow) {
    return function (event) {
      this$SettingWindow.languageSelectSequenceList_0.innerHTML = '';
      this$SettingWindow.languageSelectSequenceList_0.append(this$SettingWindow.createLanguageOption_0(this$SettingWindow.currentUserLanguage_0), this$SettingWindow.createLanguageOption_0('en'));
    };
  }
  SettingWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SettingWindow',
    interfaces: []
  };
  var SettingWindow_instance = null;
  function SettingWindow_getInstance() {
    if (SettingWindow_instance === null) {
      new SettingWindow();
    }
    return SettingWindow_instance;
  }
  function SubtitleDescription() {
    SubtitleDescription_instance = this;
  }
  SubtitleDescription.prototype.show = function () {
  };
  SubtitleDescription.prototype.show_za3lpa$ = function (showTime) {
  };
  SubtitleDescription.prototype.hide = function () {
  };
  SubtitleDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SubtitleDescription',
    interfaces: []
  };
  var SubtitleDescription_instance = null;
  function SubtitleDescription_getInstance() {
    if (SubtitleDescription_instance === null) {
      new SubtitleDescription();
    }
    return SubtitleDescription_instance;
  }
  function TVChannel(number, name, sources, information) {
    TVChannel$Companion_getInstance();
    if (number === void 0)
      number = 0;
    if (name === void 0)
      name = '';
    if (sources === void 0)
      sources = ArrayLinkList_init_0(0, [new TVChannel$Source()]);
    if (information === void 0)
      information = new TVChannel$Information();
    this.number = number;
    this.name = name;
    this.sources = sources;
    this.information = information;
  }
  function TVChannel$Source(description, iFramePlayerSrc, link) {
    if (description === void 0)
      description = '';
    if (iFramePlayerSrc === void 0)
      iFramePlayerSrc = '';
    if (link === void 0)
      link = '';
    this.description = description;
    this.iFramePlayerSrc = iFramePlayerSrc;
    this.link = link;
  }
  TVChannel$Source.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Source',
    interfaces: []
  };
  function TVChannel$Information(epgID, src) {
    if (epgID === void 0)
      epgID = '';
    if (src === void 0)
      src = '';
    this.epgID = epgID;
    this.src = src;
    this.xmltv_0 = null;
  }
  function TVChannel$Information$getXMLTV$lambda(this$Information, closure$onLoadedXMLTVListener) {
    return function (xmltv) {
      this$Information.xmltv_0 = xmltv;
      closure$onLoadedXMLTVListener(ensureNotNull(this$Information.xmltv_0));
    };
  }
  TVChannel$Information.prototype.getXMLTV_29qkou$ = function (onLoadedXMLTVListener) {
    if (this.xmltv_0 == null) {
      XMLTV$Companion_getInstance().parseXMLTV_wwqxya$(this.src, this.epgID, TVChannel$Information$getXMLTV$lambda(this, onLoadedXMLTVListener));
    }
     else {
      onLoadedXMLTVListener(ensureNotNull(this.xmltv_0));
    }
  };
  TVChannel$Information.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Information',
    interfaces: []
  };
  function TVChannel$Companion() {
    TVChannel$Companion_instance = this;
    this.tvChannels_0 = null;
  }
  function TVChannel$Companion$parseTVChannels$lambda(this$TVChannel$, closure$onParseedTVChannelsListener) {
    return function (xmlHttp) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      var tvChannels = ArrayLinkList_init([]);
      var i = 0;
      while (i < ((tmp$_1 = (tmp$_0 = (tmp$ = xmlHttp.responseXML) != null ? tmp$.getElementsByTagName('channel') : null) != null ? tmp$_0.length : null) != null ? tmp$_1 : 0)) {
        tmp$_4 = (tmp$_3 = (tmp$_2 = xmlHttp.responseXML) != null ? tmp$_2.getElementsByTagName('channel') : null) != null ? tmp$_3[i] : null;
        var number = this$TVChannel$.getNumber_0(tmp$_4);
        tmp$_7 = (tmp$_6 = (tmp$_5 = xmlHttp.responseXML) != null ? tmp$_5.getElementsByTagName('channel') : null) != null ? tmp$_6[i] : null;
        var name = this$TVChannel$.getName_0(tmp$_7);
        tmp$_10 = (tmp$_9 = (tmp$_8 = xmlHttp.responseXML) != null ? tmp$_8.getElementsByTagName('channel') : null) != null ? tmp$_9[i] : null;
        var sources = this$TVChannel$.getSources_0(tmp$_10);
        tmp$_13 = (tmp$_12 = (tmp$_11 = xmlHttp.responseXML) != null ? tmp$_11.getElementsByTagName('channel') : null) != null ? tmp$_12[i] : null;
        var information = this$TVChannel$.getInformation_0(tmp$_13);
        tvChannels.add_11rb$(new TVChannel(number, name, sources, information));
        i = i + 1 | 0;
      }
      if (i === 0) {
        tvChannels.add_11rb$(new TVChannel(0, '', ArrayLinkList_init([new TVChannel$Source()]), new TVChannel$Information()));
      }
      closure$onParseedTVChannelsListener(tvChannels);
    };
  }
  TVChannel$Companion.prototype.parseTVChannels_0 = function (src, onParseedTVChannelsListener) {
    LoadFile_getInstance().load_phn05g$(src, TVChannel$Companion$parseTVChannels$lambda(this, onParseedTVChannelsListener));
  };
  TVChannel$Companion.prototype.getNumber_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('number') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0;
  };
  TVChannel$Companion.prototype.getName_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('name') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null) != null ? tmp$_1 : '';
  };
  TVChannel$Companion.prototype.getSources_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var sources = ArrayLinkList_init([]);
    var i = 0;
    while (i < ((tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('source') : null) != null ? tmp$.length : null) != null ? tmp$_0 : 0)) {
      var description = this.getDescription_0((tmp$_1 = element != null ? element.getElementsByTagName('source') : null) != null ? tmp$_1[i] : null);
      var iFramePlayerSrc = this.getIFramePlayerSrc_0((tmp$_2 = element != null ? element.getElementsByTagName('source') : null) != null ? tmp$_2[i] : null);
      var link = this.getLink_0((tmp$_3 = element != null ? element.getElementsByTagName('source') : null) != null ? tmp$_3[i] : null);
      sources.add_11rb$(new TVChannel$Source(description, iFramePlayerSrc, link));
      i = i + 1 | 0;
    }
    if (i === 0) {
      sources.add_11rb$(new TVChannel$Source('', '', ''));
    }
    return sources;
  };
  TVChannel$Companion.prototype.getInformation_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return new TVChannel$Information((tmp$_1 = (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('information') : null) != null ? tmp$[0] : null) != null ? tmp$_0.getAttribute('epgid') : null) != null ? tmp$_1 : '', (tmp$_4 = (tmp$_3 = (tmp$_2 = element != null ? element.getElementsByTagName('information') : null) != null ? tmp$_2[0] : null) != null ? tmp$_3.getAttribute('src') : null) != null ? tmp$_4 : '');
  };
  TVChannel$Companion.prototype.getDescription_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('dscription') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null) != null ? tmp$_1 : '';
  };
  TVChannel$Companion.prototype.getIFramePlayerSrc_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('iframeplayersrc') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null) != null ? tmp$_1 : '';
  };
  TVChannel$Companion.prototype.getLink_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('link') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null) != null ? tmp$_1 : '';
  };
  function TVChannel$Companion$getTVChannels$lambda$ObjectLiteral() {
  }
  TVChannel$Companion$getTVChannels$lambda$ObjectLiteral.prototype.OnNodeIDChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    localStorage.setItem('RecentlyWatchedTVChannel', toString(postChangeNodeID));
  };
  TVChannel$Companion$getTVChannels$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function TVChannel$Companion$getTVChannels$lambda$lambda(tvChannel) {
    return tvChannel.number;
  }
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function TVChannel$Companion$getTVChannels$lambda(this$TVChannel$, closure$onLoadedTVChannelsListener) {
    return function (tvChannels) {
      var tmp$, tmp$_0;
      try {
        tvChannels.addOnNodeEventListener_ljxrtv$(new TVChannel$Companion$getTVChannels$lambda$ObjectLiteral());
        tvChannels.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('RecentlyWatchedTVChannel')) != null ? toInt(tmp$) : null) != null ? tmp$_0 : Random.Default.nextInt_vux9f0$(0, tvChannels.size));
        if (tvChannels.size > 1) {
          sortWith(tvChannels, new Comparator$ObjectLiteral(compareBy$lambda(TVChannel$Companion$getTVChannels$lambda$lambda)));
        }
      }
       catch (e) {
        println('\u8B80\u53D6\u5514\u5230\u96FB\u8996\u983B\u9053\u8868\u8CC7\u6599');
      }
      this$TVChannel$.tvChannels_0 = tvChannels;
      closure$onLoadedTVChannelsListener(ensureNotNull(this$TVChannel$.tvChannels_0));
    };
  }
  TVChannel$Companion.prototype.getTVChannels_94t8aj$ = function (onLoadedTVChannelsListener) {
    if (this.tvChannels_0 == null) {
      this.parseTVChannels_0('data/tv_channels.xml', TVChannel$Companion$getTVChannels$lambda(this, onLoadedTVChannelsListener));
    }
     else {
      onLoadedTVChannelsListener(ensureNotNull(this.tvChannels_0));
    }
  };
  TVChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TVChannel$Companion_instance = null;
  function TVChannel$Companion_getInstance() {
    if (TVChannel$Companion_instance === null) {
      new TVChannel$Companion();
    }
    return TVChannel$Companion_instance;
  }
  TVChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TVChannel',
    interfaces: []
  };
  function Tab3dIndex(x, y, z) {
    Tab3dIndex$Companion_getInstance();
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (z === void 0)
      z = 0;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  function Tab3dIndex$Companion() {
    Tab3dIndex$Companion_instance = this;
  }
  Tab3dIndex$Companion.prototype.getTab3dIndexList_za3rmp$ = function (elements) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var list = ArrayList_init();
    var i = 0;
    while (i < ((tmp$_1 = (tmp$_0 = (tmp$ = elements != null ? elements.length : null) != null ? tmp$.toString() : null) != null ? toIntOrNull(tmp$_0) : null) != null ? tmp$_1 : 0)) {
      list.add_11rb$(this.toTab3dIndex_61zpoe$((tmp$_4 = (tmp$_3 = (tmp$_2 = elements != null ? elements.eq(i) : null) != null ? tmp$_2.attr('tabIndex') : null) != null ? tmp$_3.toString() : null) != null ? tmp$_4 : ''));
      i = i + 1 | 0;
    }
    return list;
  };
  Tab3dIndex$Companion.prototype.toTab3dIndex_61zpoe$ = function (unparsedTabIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var z = String.fromCharCode((tmp$ = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 9 | 0)) != null ? tmp$ : 48);
    var y = String.fromCharCode((tmp$_0 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 8 | 0)) != null ? tmp$_0 : 48) + String.fromCharCode((tmp$_1 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 7 | 0)) != null ? tmp$_1 : 48) + String.fromCharCode((tmp$_2 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 6 | 0)) != null ? tmp$_2 : 48) + String.fromCharCode((tmp$_3 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 5 | 0)) != null ? tmp$_3 : 48);
    var x = String.fromCharCode((tmp$_4 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 4 | 0)) != null ? tmp$_4 : 48) + String.fromCharCode((tmp$_5 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 3 | 0)) != null ? tmp$_5 : 48) + String.fromCharCode((tmp$_6 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 2 | 0)) != null ? tmp$_6 : 48) + String.fromCharCode((tmp$_7 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 1 | 0)) != null ? tmp$_7 : 48);
    return new Tab3dIndex((tmp$_8 = toIntOrNull(x)) != null ? tmp$_8 : 0, (tmp$_9 = toIntOrNull(y)) != null ? tmp$_9 : 0, (tmp$_10 = toIntOrNull(z)) != null ? tmp$_10 : 0);
  };
  Tab3dIndex$Companion.prototype.toUnparsedTabIndex_lvro24$ = function (tab3dIndex) {
    return padStart(tab3dIndex.z.toString(), 1, 48) + padStart(tab3dIndex.y.toString(), 4, 48) + padStart(tab3dIndex.x.toString(), 4, 48);
  };
  Tab3dIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tab3dIndex$Companion_instance = null;
  function Tab3dIndex$Companion_getInstance() {
    if (Tab3dIndex$Companion_instance === null) {
      new Tab3dIndex$Companion();
    }
    return Tab3dIndex$Companion_instance;
  }
  Tab3dIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tab3dIndex',
    interfaces: []
  };
  function TrackDescription(id, name) {
    TrackDescription$Companion_getInstance();
    if (id === void 0)
      id = 0;
    if (name === void 0)
      name = '';
    this.id = id;
    this.name = name;
  }
  function TrackDescription$Companion() {
    TrackDescription$Companion_instance = this;
  }
  TrackDescription$Companion.prototype.toTracksNodeID_w1sgja$ = function (tracks, trackID) {
    var tmp$;
    var tracksNodeID = null;
    tmp$ = tracks.size;
    for (var i = 0; i < tmp$; i++) {
      var track = getOrNull(tracks, i);
      if (track != null) {
        if (track.id === trackID) {
          tracksNodeID = i;
        }
      }
    }
    return tracksNodeID;
  };
  TrackDescription$Companion.prototype.sortTrackDescriptions_gwog88$ = function (trackDescriptions) {
    for (var i = 0; i !== trackDescriptions.size; ++i) {
      var tmp$;
      var trackDescription_I = getOrNull(trackDescriptions, i);
      if (trackDescription_I != null) {
        tmp$ = trackDescriptions.size;
        for (var j = i + 1 | 0; j < tmp$; j++) {
          var trackDescription_J = getOrNull(trackDescriptions, j);
          if (trackDescription_J != null) {
            if (trackDescription_I.id > trackDescription_J.id) {
              var temporary = trackDescription_I;
              trackDescriptions.set_wxm5ur$(i, trackDescription_J);
              trackDescriptions.set_wxm5ur$(j, temporary);
            }
          }
        }
      }
    }
    return trackDescriptions;
  };
  TrackDescription$Companion.prototype.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$ = function (fromIframePlayerGetTracksValue, fromIframePlayerGetTrackValue) {
    var tmp$;
    try {
      var trackDescriptions = this.sortTrackDescriptions_gwog88$(ArrayLinkList$Companion_getInstance().valueOf_ro6dgy$(JSON.parse(JSON.stringify(fromIframePlayerGetTracksValue))));
      trackDescriptions.designated_za3lpa$((tmp$ = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(trackDescriptions, JSON.parse(JSON.stringify(fromIframePlayerGetTrackValue)).id)) != null ? tmp$ : 0);
      return trackDescriptions;
    }
     catch (e) {
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    }
  };
  TrackDescription$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TrackDescription$Companion_instance = null;
  function TrackDescription$Companion_getInstance() {
    if (TrackDescription$Companion_instance === null) {
      new TrackDescription$Companion();
    }
    return TrackDescription$Companion_instance;
  }
  TrackDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrackDescription',
    interfaces: []
  };
  function UserControlPanel() {
    UserControlPanel_instance = this;
    var tmp$, tmp$_0;
    this.userControlPanel_0 = Kotlin.isType(tmp$ = document.getElementById('userControlPanel'), HTMLElement) ? tmp$ : throwCCE();
    this.shower_0 = Kotlin.isType(tmp$_0 = document.getElementById('userControlPanelShower'), HTMLElement) ? tmp$_0 : throwCCE();
    this.userControlPanelShowTime = 500;
    this.hideTimer_mknn4j$_0 = 0;
    this.hideMouseTimer_r29tyc$_0 = 0;
    this.onShowUserControlPanel = UserControlPanel$onShowUserControlPanel$lambda;
    this.onHideUserControlPanel = UserControlPanel$onHideUserControlPanel$lambda;
    this.onLongClick_jizysp$_0 = new UserControlPanel$OnLongClick(UserControlPanel$onLongClick$lambda);
    VirtualRemote_getInstance();
    FullScreenButton_getInstance();
    PictureInPictureButton_getInstance();
    this.shower_0.onclick = UserControlPanel_init$lambda(this);
    this.shower_0.onmousemove = UserControlPanel_init$lambda_0(this);
    this.userControlPanel_0.onmousemove = UserControlPanel_init$lambda_1(this);
    this.userControlPanel_0.onfocus = UserControlPanel_init$lambda_2(this);
    var _shower = this.shower_0;
    _shower.ontouchstart = UserControlPanel_init$lambda_3(this);
    jQuery('button, select, option, input').focus(UserControlPanel_init$lambda_4);
    this.setAllBuutonOnLongClickFeatures_0();
  }
  Object.defineProperty(UserControlPanel.prototype, 'hideTimer_0', {
    get: function () {
      return this.hideTimer_mknn4j$_0;
    },
    set: function (value) {
      window.clearTimeout(this.hideTimer_mknn4j$_0);
      this.hideTimer_mknn4j$_0 = value;
    }
  });
  Object.defineProperty(UserControlPanel.prototype, 'hideMouseTimer_0', {
    get: function () {
      return this.hideMouseTimer_r29tyc$_0;
    },
    set: function (value) {
      window.clearTimeout(this.hideMouseTimer_r29tyc$_0);
      this.hideMouseTimer_r29tyc$_0 = value;
    }
  });
  UserControlPanel.prototype.show = function () {
    this.userControlPanel_0.style.display = 'block';
    this.onShowUserControlPanel();
    window.clearTimeout(this.hideTimer_0);
    jQuery('#userControlPanelShower').css('cursor', 'auto');
  };
  function UserControlPanel$show$lambda(this$UserControlPanel) {
    return function () {
      this$UserControlPanel.hide();
    };
  }
  UserControlPanel.prototype.show_za3lpa$ = function (hideTimerTimeout) {
    this.show();
    this.hideTimer_0 = window.setTimeout(UserControlPanel$show$lambda(this), hideTimerTimeout);
  };
  function UserControlPanel$hide$lambda() {
    jQuery('#userControlPanelShower').css('cursor', 'none');
  }
  UserControlPanel.prototype.hide = function () {
    this.userControlPanel_0.style.display = 'none';
    this.onHideUserControlPanel();
    window.clearTimeout(this.hideTimer_0);
    this.hideMouseTimer_0 = window.setTimeout(UserControlPanel$hide$lambda, 2000);
  };
  function UserControlPanel$OnLongClick(onLongClickProgram) {
    this.onLongClickProgram = onLongClickProgram;
    this.pressTimer_0 = 0;
    this.isPressDown = false;
  }
  function UserControlPanel$OnLongClick$mousedown$lambda$lambda(this$OnLongClick) {
    return function () {
      this$OnLongClick.onLongClickProgram();
    };
  }
  function UserControlPanel$OnLongClick$mousedown$lambda(this$OnLongClick) {
    return function () {
      if (this$OnLongClick.isPressDown) {
        this$OnLongClick.pressTimer_0 = window.setInterval(UserControlPanel$OnLongClick$mousedown$lambda$lambda(this$OnLongClick), 100);
      }
    };
  }
  UserControlPanel$OnLongClick.prototype.mousedown = function () {
    this.isPressDown = true;
    window.setTimeout(UserControlPanel$OnLongClick$mousedown$lambda(this), 500);
    return false;
  };
  UserControlPanel$OnLongClick.prototype.mouseup = function () {
    this.isPressDown = false;
    window.clearInterval(this.pressTimer_0);
    return false;
  };
  UserControlPanel$OnLongClick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnLongClick',
    interfaces: []
  };
  Object.defineProperty(UserControlPanel.prototype, 'onLongClick_0', {
    get: function () {
      return this.onLongClick_jizysp$_0;
    },
    set: function (value) {
      this.onLongClick_jizysp$_0.mouseup();
      this.onLongClick_jizysp$_0 = value;
    }
  });
  function UserControlPanel$setAllBuutonOnLongClickFeatures$lambda$lambda(closure$button) {
    return function () {
      closure$button.click();
    };
  }
  function UserControlPanel$setAllBuutonOnLongClickFeatures$lambda(this$UserControlPanel) {
    return function () {
      var button = jQuery(this);
      this$UserControlPanel.onLongClick_0 = new UserControlPanel$OnLongClick(UserControlPanel$setAllBuutonOnLongClickFeatures$lambda$lambda(button));
      this$UserControlPanel.onLongClick_0.mousedown();
    };
  }
  function UserControlPanel$setAllBuutonOnLongClickFeatures$lambda_0(this$UserControlPanel) {
    return function () {
      this$UserControlPanel.onLongClick_0.mouseup();
    };
  }
  function UserControlPanel$setAllBuutonOnLongClickFeatures$lambda_1(this$UserControlPanel) {
    return function () {
      this$UserControlPanel.onLongClick_0.mouseup();
    };
  }
  UserControlPanel.prototype.setAllBuutonOnLongClickFeatures_0 = function () {
    jQuery('button').mousedown(UserControlPanel$setAllBuutonOnLongClickFeatures$lambda(this)).mouseup(UserControlPanel$setAllBuutonOnLongClickFeatures$lambda_0(this)).mouseout(UserControlPanel$setAllBuutonOnLongClickFeatures$lambda_1(this));
  };
  function UserControlPanel$onShowUserControlPanel$lambda() {
  }
  function UserControlPanel$onHideUserControlPanel$lambda() {
  }
  function UserControlPanel$onLongClick$lambda() {
  }
  function UserControlPanel_init$lambda(this$UserControlPanel) {
    return function (event) {
      if (this$UserControlPanel.userControlPanel_0.style.display === 'block') {
        this$UserControlPanel.hide();
      }
       else {
        this$UserControlPanel.show_za3lpa$(15000);
      }
    };
  }
  function UserControlPanel_init$lambda_0(this$UserControlPanel) {
    return function (event) {
      this$UserControlPanel.show_za3lpa$(500);
    };
  }
  function UserControlPanel_init$lambda_1(this$UserControlPanel) {
    return function (event) {
      event.stopPropagation();
      this$UserControlPanel.show_za3lpa$(30000);
    };
  }
  function UserControlPanel_init$lambda_2(this$UserControlPanel) {
    return function (event) {
      this$UserControlPanel.show_za3lpa$(15000);
    };
  }
  function UserControlPanel_init$lambda_3(this$UserControlPanel) {
    return function (event) {
      event.preventDefault();
      if (this$UserControlPanel.userControlPanel_0.style.display === 'block') {
        this$UserControlPanel.hide();
      }
       else {
        this$UserControlPanel.show_za3lpa$(15000);
      }
    };
  }
  function UserControlPanel_init$lambda_4() {
    jQuery(this.hover());
  }
  UserControlPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserControlPanel',
    interfaces: []
  };
  var UserControlPanel_instance = null;
  function UserControlPanel_getInstance() {
    if (UserControlPanel_instance === null) {
      new UserControlPanel();
    }
    return UserControlPanel_instance;
  }
  function VideoDescription() {
    VideoDescription_instance = this;
  }
  VideoDescription.prototype.show = function () {
  };
  VideoDescription.prototype.show_za3lpa$ = function (showTime) {
  };
  VideoDescription.prototype.hide = function () {
  };
  VideoDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VideoDescription',
    interfaces: []
  };
  var VideoDescription_instance = null;
  function VideoDescription_getInstance() {
    if (VideoDescription_instance === null) {
      new VideoDescription();
    }
    return VideoDescription_instance;
  }
  function VirtualRemote() {
    VirtualRemote_instance = this;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47;
    this.virtualRemote_0 = Kotlin.isType(tmp$ = document.getElementById('virtualRemote'), HTMLDivElement) ? tmp$ : throwCCE();
    this.hideVirtualRemoteButton = Kotlin.isType(tmp$_0 = document.getElementById('hideVirtualRemoteButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.epgButton = Kotlin.isType(tmp$_1 = document.getElementById('epgButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.nextChannelButton = Kotlin.isType(tmp$_2 = document.getElementById('nextChannelButton'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    this.previousChannelButton = Kotlin.isType(tmp$_3 = document.getElementById('previousChannelButton'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    this.designateChannelSelect = Kotlin.isType(tmp$_4 = document.getElementById('designateChannelSelect'), HTMLSelectElement) ? tmp$_4 : throwCCE();
    this.designateChannelInputText = Kotlin.isType(tmp$_5 = document.getElementById('designateChannelInputText'), HTMLInputElement) ? tmp$_5 : throwCCE();
    this.designateChannelButton = Kotlin.isType(tmp$_6 = document.getElementById('designateChannelButton'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    this.lastTimeChannelButton = Kotlin.isType(tmp$_7 = document.getElementById('lastTimeChannelButton'), HTMLButtonElement) ? tmp$_7 : throwCCE();
    this.nextVideoButton = Kotlin.isType(tmp$_8 = document.getElementById('nextVideoButton'), HTMLButtonElement) ? tmp$_8 : throwCCE();
    this.previousVideoButton = Kotlin.isType(tmp$_9 = document.getElementById('previousVideoButton'), HTMLButtonElement) ? tmp$_9 : throwCCE();
    this.designateVideoSelect = Kotlin.isType(tmp$_10 = document.getElementById('designateVideoSelect'), HTMLSelectElement) ? tmp$_10 : throwCCE();
    this.nextAudioButton = Kotlin.isType(tmp$_11 = document.getElementById('nextAudioButton'), HTMLButtonElement) ? tmp$_11 : throwCCE();
    this.previousAudioButton = Kotlin.isType(tmp$_12 = document.getElementById('previousAudioButton'), HTMLButtonElement) ? tmp$_12 : throwCCE();
    this.designateAudioSelect = Kotlin.isType(tmp$_13 = document.getElementById('designateAudioSelect'), HTMLSelectElement) ? tmp$_13 : throwCCE();
    this.onHeadNextAudioButton = Kotlin.isType(tmp$_14 = document.getElementById('onHeadNextAudioButton'), HTMLButtonElement) ? tmp$_14 : throwCCE();
    this.nextSubtitleButton = Kotlin.isType(tmp$_15 = document.getElementById('nextSubtitleButton'), HTMLButtonElement) ? tmp$_15 : throwCCE();
    this.previousSubtitleButton = Kotlin.isType(tmp$_16 = document.getElementById('previousSubtitleButton'), HTMLButtonElement) ? tmp$_16 : throwCCE();
    this.designateSubtitleSelect = Kotlin.isType(tmp$_17 = document.getElementById('designateSubtitleSelect'), HTMLSelectElement) ? tmp$_17 : throwCCE();
    this.onHeadNextSubtitleButton = Kotlin.isType(tmp$_18 = document.getElementById('onHeadNextSubtitleButton'), HTMLButtonElement) ? tmp$_18 : throwCCE();
    this.volumeMuteButton = Kotlin.isType(tmp$_19 = document.getElementById('volumeMuteButton'), HTMLButtonElement) ? tmp$_19 : throwCCE();
    this.volumeUpButton = Kotlin.isType(tmp$_20 = document.getElementById('volumeUpButton'), HTMLButtonElement) ? tmp$_20 : throwCCE();
    this.volumeDownButton = Kotlin.isType(tmp$_21 = document.getElementById('volumeDownButton'), HTMLButtonElement) ? tmp$_21 : throwCCE();
    this.programmableRedButton = Kotlin.isType(tmp$_22 = document.getElementById('programmableRedButton'), HTMLButtonElement) ? tmp$_22 : throwCCE();
    this.programmableGreenButton = Kotlin.isType(tmp$_23 = document.getElementById('programmableGreenButton'), HTMLButtonElement) ? tmp$_23 : throwCCE();
    this.programmableYellowButton = Kotlin.isType(tmp$_24 = document.getElementById('programmableYellowButton'), HTMLButtonElement) ? tmp$_24 : throwCCE();
    this.programmableBlueButton = Kotlin.isType(tmp$_25 = document.getElementById('programmableBlueButton'), HTMLButtonElement) ? tmp$_25 : throwCCE();
    this.number0Button = Kotlin.isType(tmp$_26 = document.getElementById('number0Button'), HTMLButtonElement) ? tmp$_26 : throwCCE();
    this.number1Button = Kotlin.isType(tmp$_27 = document.getElementById('number1Button'), HTMLButtonElement) ? tmp$_27 : throwCCE();
    this.number2Button = Kotlin.isType(tmp$_28 = document.getElementById('number2Button'), HTMLButtonElement) ? tmp$_28 : throwCCE();
    this.number3Button = Kotlin.isType(tmp$_29 = document.getElementById('number3Button'), HTMLButtonElement) ? tmp$_29 : throwCCE();
    this.number4Button = Kotlin.isType(tmp$_30 = document.getElementById('number4Button'), HTMLButtonElement) ? tmp$_30 : throwCCE();
    this.number5Button = Kotlin.isType(tmp$_31 = document.getElementById('number5Button'), HTMLButtonElement) ? tmp$_31 : throwCCE();
    this.number6Button = Kotlin.isType(tmp$_32 = document.getElementById('number6Button'), HTMLButtonElement) ? tmp$_32 : throwCCE();
    this.number7Button = Kotlin.isType(tmp$_33 = document.getElementById('number7Button'), HTMLButtonElement) ? tmp$_33 : throwCCE();
    this.number8Button = Kotlin.isType(tmp$_34 = document.getElementById('number8Button'), HTMLButtonElement) ? tmp$_34 : throwCCE();
    this.number9Button = Kotlin.isType(tmp$_35 = document.getElementById('number9Button'), HTMLButtonElement) ? tmp$_35 : throwCCE();
    this.refreshButton = Kotlin.isType(tmp$_36 = document.getElementById('refreshButton'), HTMLButtonElement) ? tmp$_36 : throwCCE();
    this.channelInformationButton = Kotlin.isType(tmp$_37 = document.getElementById('channelInformationButton'), HTMLButtonElement) ? tmp$_37 : throwCCE();
    this.settingWindowButton = Kotlin.isType(tmp$_38 = document.getElementById('settingWindowButton'), HTMLButtonElement) ? tmp$_38 : throwCCE();
    this.clearSettingButton = Kotlin.isType(tmp$_39 = document.getElementById('clearSettingButton'), HTMLButtonElement) ? tmp$_39 : throwCCE();
    this.centerButton = Kotlin.isType(tmp$_40 = document.createElement('button'), HTMLButtonElement) ? tmp$_40 : throwCCE();
    this.upButton = Kotlin.isType(tmp$_41 = document.createElement('button'), HTMLButtonElement) ? tmp$_41 : throwCCE();
    this.downButton = Kotlin.isType(tmp$_42 = document.createElement('button'), HTMLButtonElement) ? tmp$_42 : throwCCE();
    this.leftButton = Kotlin.isType(tmp$_43 = document.createElement('button'), HTMLButtonElement) ? tmp$_43 : throwCCE();
    this.rightButton = Kotlin.isType(tmp$_44 = document.createElement('button'), HTMLButtonElement) ? tmp$_44 : throwCCE();
    this.videoDescriptionButton = Kotlin.isType(tmp$_45 = document.createElement('button'), HTMLButtonElement) ? tmp$_45 : throwCCE();
    this.audioDescriptionButton = Kotlin.isType(tmp$_46 = document.createElement('button'), HTMLButtonElement) ? tmp$_46 : throwCCE();
    this.subtitleDescriptionButton = Kotlin.isType(tmp$_47 = document.createElement('button'), HTMLButtonElement) ? tmp$_47 : throwCCE();
    this.hideVirtualRemoteButton.onclick = VirtualRemote_init$lambda;
    this.epgButton.onclick = VirtualRemote_init$lambda_0;
    this.nextChannelButton.onclick = VirtualRemote_init$lambda_1;
    this.previousChannelButton.onclick = VirtualRemote_init$lambda_2;
    this.designateChannelSelect.onchange = VirtualRemote_init$lambda_3(this);
    this.designateChannelButton.onclick = VirtualRemote_init$lambda_4(this);
    this.lastTimeChannelButton.onclick = VirtualRemote_init$lambda_5;
    this.nextVideoButton.onclick = VirtualRemote_init$lambda_6;
    this.previousVideoButton.onclick = VirtualRemote_init$lambda_7;
    this.designateVideoSelect.onchange = VirtualRemote_init$lambda_8(this);
    this.nextAudioButton.onclick = VirtualRemote_init$lambda_9;
    this.previousAudioButton.onclick = VirtualRemote_init$lambda_10;
    this.designateAudioSelect.onchange = VirtualRemote_init$lambda_11(this);
    this.onHeadNextAudioButton.onclick = VirtualRemote_init$lambda_12;
    this.nextSubtitleButton.onclick = VirtualRemote_init$lambda_13;
    this.previousSubtitleButton.onclick = VirtualRemote_init$lambda_14;
    this.designateSubtitleSelect.onchange = VirtualRemote_init$lambda_15(this);
    this.onHeadNextSubtitleButton.onclick = VirtualRemote_init$lambda_16;
    this.volumeMuteButton.onclick = VirtualRemote_init$lambda_17;
    this.volumeUpButton.onclick = VirtualRemote_init$lambda_18;
    this.volumeDownButton.onclick = VirtualRemote_init$lambda_19;
    this.programmableRedButton.onclick = VirtualRemote_init$lambda_20;
    this.programmableGreenButton.onclick = VirtualRemote_init$lambda_21;
    this.programmableYellowButton.onclick = VirtualRemote_init$lambda_22;
    this.programmableBlueButton.onclick = VirtualRemote_init$lambda_23;
    this.number0Button.onclick = VirtualRemote_init$lambda_24;
    this.number1Button.onclick = VirtualRemote_init$lambda_25;
    this.number2Button.onclick = VirtualRemote_init$lambda_26;
    this.number3Button.onclick = VirtualRemote_init$lambda_27;
    this.number4Button.onclick = VirtualRemote_init$lambda_28;
    this.number5Button.onclick = VirtualRemote_init$lambda_29;
    this.number6Button.onclick = VirtualRemote_init$lambda_30;
    this.number7Button.onclick = VirtualRemote_init$lambda_31;
    this.number8Button.onclick = VirtualRemote_init$lambda_32;
    this.number9Button.onclick = VirtualRemote_init$lambda_33;
    this.refreshButton.onclick = VirtualRemote_init$lambda_34;
    this.channelInformationButton.onclick = VirtualRemote_init$lambda_35;
    this.settingWindowButton.onclick = VirtualRemote_init$lambda_36;
    this.clearSettingButton.onclick = VirtualRemote_init$lambda_37;
    this.centerButton.onclick = VirtualRemote_init$lambda_38;
    this.upButton.onclick = VirtualRemote_init$lambda_39;
    this.downButton.onclick = VirtualRemote_init$lambda_40;
    this.leftButton.onclick = VirtualRemote_init$lambda_41;
    this.rightButton.onclick = VirtualRemote_init$lambda_42;
    this.videoDescriptionButton.onclick = VirtualRemote_init$lambda_43;
    this.audioDescriptionButton.onclick = VirtualRemote_init$lambda_44;
    this.subtitleDescriptionButton.onclick = VirtualRemote_init$lambda_45;
  }
  VirtualRemote.prototype.update = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    var channelOptionHTMLString = '';
    tmp$ = get_tvChannels().iterator();
    while (tmp$.hasNext()) {
      var tvChannel = tmp$.next();
      channelOptionHTMLString += '' + ('<option value=' + tvChannel.number + '>') + (padStart(tvChannel.number.toString(), 3, 48) + ' ' + tvChannel.name) + '<\/option>';
    }
    this.designateChannelSelect.innerHTML = channelOptionHTMLString;
    this.designateChannelSelect.value = toString((tmp$_0 = get_tvChannels().node) != null ? tmp$_0.number : null);
    var videoOptionHTMLString = '';
    tmp$_1 = get_player().videoTracks.iterator();
    while (tmp$_1.hasNext()) {
      var videoTracks = tmp$_1.next();
      videoOptionHTMLString += '<option value=' + videoTracks.id + '>' + videoTracks.name + '<\/option>';
    }
    this.designateVideoSelect.innerHTML = videoOptionHTMLString;
    this.designateVideoSelect.value = ((tmp$_3 = (tmp$_2 = get_player().videoTracks.node) != null ? tmp$_2.id : null) != null ? tmp$_3 : 0).toString();
    var audioOptionHTMLString = '';
    tmp$_4 = get_player().audioTracks.iterator();
    while (tmp$_4.hasNext()) {
      var audioTracks = tmp$_4.next();
      audioOptionHTMLString += '<option value=' + audioTracks.id + '>' + audioTracks.name + '<\/option>';
    }
    this.designateAudioSelect.innerHTML = audioOptionHTMLString;
    this.designateAudioSelect.value = ((tmp$_6 = (tmp$_5 = get_player().audioTracks.node) != null ? tmp$_5.id : null) != null ? tmp$_6 : 0).toString();
    var subtitleOptionHTMLString = '';
    tmp$_7 = get_player().subtitleTracks.iterator();
    while (tmp$_7.hasNext()) {
      var subtitleTracks = tmp$_7.next();
      subtitleOptionHTMLString += '<option value=' + subtitleTracks.id + '>' + subtitleTracks.name + '<\/option>';
    }
    this.designateSubtitleSelect.innerHTML = subtitleOptionHTMLString;
    this.designateSubtitleSelect.value = ((tmp$_9 = (tmp$_8 = get_player().subtitleTracks.node) != null ? tmp$_8.id : null) != null ? tmp$_9 : 0).toString();
  };
  function VirtualRemote_init$lambda(event) {
    event.stopPropagation();
    UserControlPanel_getInstance().hide();
  }
  function VirtualRemote_init$lambda_0(event) {
    if (EPG_getInstance().isShow()) {
      EPG_getInstance().hide();
    }
     else {
      EPG_getInstance().show();
      UserControlPanel_getInstance().hide();
    }
  }
  function VirtualRemote_init$lambda_1(event) {
    get_tvChannels().next();
  }
  function VirtualRemote_init$lambda_2(event) {
    get_tvChannels().previous();
  }
  function VirtualRemote_init$lambda_3(this$VirtualRemote) {
    return function (event) {
      designatedChannel(toInt(this$VirtualRemote.designateChannelSelect.value));
    };
  }
  function VirtualRemote_init$lambda_4(this$VirtualRemote) {
    return function (event) {
      designatedChannel(toInt(this$VirtualRemote.designateChannelInputText.value));
    };
  }
  function VirtualRemote_init$lambda_5(event) {
    get_tvChannels().lastTime();
  }
  function VirtualRemote_init$lambda_6(event) {
    get_player().nextVideoTrack();
  }
  function VirtualRemote_init$lambda_7(event) {
    get_player().previousVideoTrack();
  }
  function VirtualRemote_init$lambda_8(this$VirtualRemote) {
    return function (event) {
      get_player().designatedVideoTrack(toInt(this$VirtualRemote.designateVideoSelect.value));
    };
  }
  function VirtualRemote_init$lambda_9(event) {
    get_player().nextAudioTrack();
  }
  function VirtualRemote_init$lambda_10(event) {
    get_player().previousAudioTrack();
  }
  function VirtualRemote_init$lambda_11(this$VirtualRemote) {
    return function (event) {
      get_player().designatedAudioTrack(toInt(this$VirtualRemote.designateAudioSelect.value));
    };
  }
  function VirtualRemote_init$lambda_12(event) {
    get_player().nextAudioTrack();
  }
  function VirtualRemote_init$lambda_13(event) {
    get_player().nextSubtitleTrack();
  }
  function VirtualRemote_init$lambda_14(event) {
    get_player().previousSubtitleTrack();
  }
  function VirtualRemote_init$lambda_15(this$VirtualRemote) {
    return function (event) {
      get_player().designatedSubtitleTrack(toInt(this$VirtualRemote.designateSubtitleSelect.value));
    };
  }
  function VirtualRemote_init$lambda_16(event) {
    get_player().nextSubtitleTrack();
  }
  function VirtualRemote_init$lambda_17(event) {
    get_player().volumeMute();
  }
  function VirtualRemote_init$lambda_18(event) {
    get_player().volumeUp();
  }
  function VirtualRemote_init$lambda_19(event) {
    get_player().volumeDown();
  }
  function VirtualRemote_init$lambda_20(event) {
    get_player().programmable(Player$ProgrammableColor$red_getInstance());
  }
  function VirtualRemote_init$lambda_21(event) {
    get_player().programmable(Player$ProgrammableColor$green_getInstance());
  }
  function VirtualRemote_init$lambda_22(event) {
    get_player().programmable(Player$ProgrammableColor$yellow_getInstance());
  }
  function VirtualRemote_init$lambda_23(event) {
    get_player().programmable(Player$ProgrammableColor$blue_getInstance());
  }
  function VirtualRemote_init$lambda_24(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('0');
  }
  function VirtualRemote_init$lambda_25(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('1');
  }
  function VirtualRemote_init$lambda_26(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('2');
  }
  function VirtualRemote_init$lambda_27(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('3');
  }
  function VirtualRemote_init$lambda_28(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('4');
  }
  function VirtualRemote_init$lambda_29(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('5');
  }
  function VirtualRemote_init$lambda_30(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('6');
  }
  function VirtualRemote_init$lambda_31(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('7');
  }
  function VirtualRemote_init$lambda_32(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('8');
  }
  function VirtualRemote_init$lambda_33(event) {
    EnteringNumberBox_getInstance().show_61zpoe$('9');
  }
  function VirtualRemote_init$lambda_34(event) {
    updateChannel();
  }
  function VirtualRemote_init$lambda_35(event) {
    if (ChannelInformation_getInstance().isShow) {
      ChannelInformation_getInstance().hide();
    }
     else {
      ChannelInformation_getInstance().show_za3lpa$(60000);
    }
  }
  function VirtualRemote_init$lambda_36(event) {
    SettingWindow_getInstance().show();
  }
  function VirtualRemote_init$lambda_37(event) {
    localStorage.clear();
    location.reload();
  }
  function VirtualRemote_init$lambda_38(event) {
    var tmp$;
    (tmp$ = jQuery(':focus')) != null ? tmp$.click() : null;
  }
  function VirtualRemote_init$lambda$lambda(element) {
    var tmp$;
    return (tmp$ = toIntOrNull(Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(element))) != null ? tmp$ : 0;
  }
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function VirtualRemote_init$lambda_39(event) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    var selectables = jQuery(':tabbable');
    var current = jQuery(':focus');
    var currentIndex = (tmp$ = selectables != null ? selectables.index(current) : null) != null ? tmp$ : 0;
    var currentTabIndex = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_1 = (tmp$_0 = current != null ? current.attr('tabIndex') : null) != null ? tmp$_0.toString() : null) != null ? tmp$_1 : '');
    for (var i = currentIndex - 1 | 0; i >= 0; i--) {
      var tabIndexForCheck = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_4 = (tmp$_3 = (tmp$_2 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_2.attr('tabIndex') : null) != null ? tmp$_3.toString() : null) != null ? tmp$_4 : '');
      if (tabIndexForCheck.y === currentTabIndex.y && tabIndexForCheck.z === currentTabIndex.z) {
        if (tabIndexForCheck.x >= currentTabIndex.x) {
          (tmp$_5 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_5.focus() : null;
          return;
        }
      }
    }
    var needTabIndex = {v: currentTabIndex};
    var tabIndexList = Tab3dIndex$Companion_getInstance().getTab3dIndexList_za3rmp$(selectables);
    if (tabIndexList.size > 1) {
      sortWith(tabIndexList, new Comparator$ObjectLiteral_0(compareByDescending$lambda(VirtualRemote_init$lambda$lambda)));
    }
    if (needTabIndex.v.y === last(tabIndexList).y) {
      needTabIndex.v = new Tab3dIndex(currentTabIndex.x, ((tmp$_7 = (tmp$_6 = getOrNull(tabIndexList, 0)) != null ? tmp$_6.y : null) != null ? tmp$_7 : 0) + 1 | 0, currentTabIndex.z);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_20;
      tmp$_20 = tabIndexList.iterator();
      loop_label: while (tmp$_20.hasNext()) {
        var element = tmp$_20.next();
        var predicate$result;
        predicate$break: do {
          if (needTabIndex.v.z === element.z) {
            predicate$result = needTabIndex.v.y > element.y;
            break predicate$break;
          }
          predicate$result = false;
        }
         while (false);
        if (predicate$result) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var nextTabIndex = (tmp$_8 = firstOrNull$result) != null ? tmp$_8 : new Tab3dIndex(0, 0, 0);
    var closestIndex = 0;
    for (var i_0 = (tmp$_11 = (tmp$_10 = (tmp$_9 = selectables != null ? selectables.length : null) != null ? tmp$_9.toString() : null) != null ? toIntOrNull(tmp$_10) : null) != null ? tmp$_11 : 0; i_0 >= 0; i_0--) {
      var tabIndexForCheck_0 = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_14 = (tmp$_13 = (tmp$_12 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_12.attr('tabIndex') : null) != null ? tmp$_13.toString() : null) != null ? tmp$_14 : '');
      if (tabIndexForCheck_0.y === nextTabIndex.y && tabIndexForCheck_0.z === nextTabIndex.z) {
        if (tabIndexForCheck_0.x === currentTabIndex.x) {
          (tmp$_15 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_15.focus() : null;
          return;
        }
        if (Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_18 = (tmp$_17 = (tmp$_16 = selectables != null ? selectables.eq(closestIndex) : null) != null ? tmp$_16.attr('tabIndex') : null) != null ? tmp$_17.toString() : null) != null ? tmp$_18 : '').x <= tabIndexForCheck_0.x) {
          closestIndex = i_0;
        }
      }
    }
    (tmp$_19 = selectables != null ? selectables.eq(closestIndex) : null) != null ? tmp$_19.focus() : null;
  }
  function VirtualRemote_init$lambda$lambda_0(element) {
    var tmp$;
    return (tmp$ = toIntOrNull(Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(element))) != null ? tmp$ : 0;
  }
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function VirtualRemote_init$lambda_40(event) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    var selectables = jQuery(':tabbable');
    var current = jQuery(':focus');
    var currentIndex = (tmp$ = selectables != null ? selectables.index(current) : null) != null ? tmp$ : 0;
    var currentTabIndex = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_1 = (tmp$_0 = current != null ? current.attr('tabIndex') : null) != null ? tmp$_0.toString() : null) != null ? tmp$_1 : '');
    tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = selectables != null ? selectables.length : null) != null ? tmp$_2.toString() : null) != null ? toIntOrNull(tmp$_3) : null) != null ? tmp$_4 : 0;
    for (var i = currentIndex + 1 | 0; i < tmp$_5; i++) {
      var tabIndexForCheck = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_8 = (tmp$_7 = (tmp$_6 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_6.attr('tabIndex') : null) != null ? tmp$_7.toString() : null) != null ? tmp$_8 : '');
      if (tabIndexForCheck.y === currentTabIndex.y && tabIndexForCheck.z === currentTabIndex.z) {
        if (tabIndexForCheck.x <= currentTabIndex.x) {
          (tmp$_9 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_9.focus() : null;
          return;
        }
      }
    }
    var needTabIndex = {v: currentTabIndex};
    var tabIndexList = Tab3dIndex$Companion_getInstance().getTab3dIndexList_za3rmp$(selectables);
    if (tabIndexList.size > 1) {
      sortWith(tabIndexList, new Comparator$ObjectLiteral_1(compareBy$lambda_0(VirtualRemote_init$lambda$lambda_0)));
    }
    if (needTabIndex.v.y === last(tabIndexList).y) {
      needTabIndex.v = new Tab3dIndex(currentTabIndex.x, -1, currentTabIndex.z);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_20;
      tmp$_20 = tabIndexList.iterator();
      loop_label: while (tmp$_20.hasNext()) {
        var element = tmp$_20.next();
        var predicate$result;
        predicate$break: do {
          if (needTabIndex.v.z === element.z) {
            predicate$result = needTabIndex.v.y < element.y;
            break predicate$break;
          }
          predicate$result = false;
        }
         while (false);
        if (predicate$result) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var nextTabIndex = (tmp$_10 = firstOrNull$result) != null ? tmp$_10 : new Tab3dIndex(0, 0, 0);
    var closestIndex = 0;
    tmp$_14 = ((tmp$_13 = (tmp$_12 = (tmp$_11 = selectables != null ? selectables.length : null) != null ? tmp$_11.toString() : null) != null ? toIntOrNull(tmp$_12) : null) != null ? tmp$_13 : 0) - 1 | 0;
    for (var i_0 = 0; i_0 < tmp$_14; i_0++) {
      var tabIndexForCheck_0 = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_17 = (tmp$_16 = (tmp$_15 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_15.attr('tabIndex') : null) != null ? tmp$_16.toString() : null) != null ? tmp$_17 : '');
      if (tabIndexForCheck_0.y === nextTabIndex.y && tabIndexForCheck_0.z === nextTabIndex.z) {
        if (tabIndexForCheck_0.x === currentTabIndex.x) {
          (tmp$_18 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_18.focus() : null;
          return;
        }
        closestIndex = i_0;
      }
    }
    (tmp$_19 = selectables != null ? selectables.eq(closestIndex) : null) != null ? tmp$_19.focus() : null;
  }
  function VirtualRemote_init$lambda_41(event) {
    jQuery != null ? jQuery.tabPrev() : null;
  }
  function VirtualRemote_init$lambda_42(event) {
    jQuery != null ? jQuery.tabNext() : null;
  }
  function VirtualRemote_init$lambda_43(event) {
    VideoDescription_getInstance().show_za3lpa$(5000);
  }
  function VirtualRemote_init$lambda_44(event) {
    AudioDescription_getInstance().show_za3lpa$(5000);
  }
  function VirtualRemote_init$lambda_45(event) {
    SubtitleDescription_getInstance().show_za3lpa$(5000);
  }
  VirtualRemote.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VirtualRemote',
    interfaces: []
  };
  var VirtualRemote_instance = null;
  function VirtualRemote_getInstance() {
    if (VirtualRemote_instance === null) {
      new VirtualRemote();
    }
    return VirtualRemote_instance;
  }
  function WatchingCounter(tvChannel) {
    WatchingCounter$Companion_getInstance();
    this.tvChannel_0 = tvChannel;
    var tmp$;
    this.iframeWatchingCounter_0 = Kotlin.isType(tmp$ = document.getElementById('iframeWatchingCounter'), HTMLIFrameElement) ? tmp$ : throwCCE();
    this.rootURL_0 = 'http://hknbp.sourcekey.org/';
    WatchingCounter$Companion_getInstance().timer_0 = window.setTimeout(WatchingCounter_init$lambda(this), 15000);
  }
  function WatchingCounter$Companion() {
    WatchingCounter$Companion_instance = this;
    this.timer_kk3exo$_0 = 0;
  }
  Object.defineProperty(WatchingCounter$Companion.prototype, 'timer_0', {
    get: function () {
      return this.timer_kk3exo$_0;
    },
    set: function (value) {
      window.clearTimeout(this.timer_0);
      this.timer_kk3exo$_0 = value;
    }
  });
  WatchingCounter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WatchingCounter$Companion_instance = null;
  function WatchingCounter$Companion_getInstance() {
    if (WatchingCounter$Companion_instance === null) {
      new WatchingCounter$Companion();
    }
    return WatchingCounter$Companion_instance;
  }
  function WatchingCounter_init$lambda(this$WatchingCounter) {
    return function () {
      this$WatchingCounter.iframeWatchingCounter_0.src = this$WatchingCounter.rootURL_0 + 'watchingCounter/' + this$WatchingCounter.tvChannel_0.number + '.html';
    };
  }
  WatchingCounter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WatchingCounter',
    interfaces: []
  };
  function XMLTV(displayNames, icon, urls, programmes) {
    XMLTV$Companion_getInstance();
    if (displayNames === void 0)
      displayNames = null;
    if (icon === void 0)
      icon = null;
    if (urls === void 0)
      urls = null;
    if (programmes === void 0)
      programmes = null;
    this.displayNames = displayNames;
    this.icon = icon;
    this.urls = urls;
    this.programmes = programmes;
  }
  function XMLTV$MultiLanguage() {
  }
  function XMLTV$MultiLanguage$MultiLanguageList() {
  }
  XMLTV$MultiLanguage$MultiLanguageList.prototype.findSelectLanguage_0 = function (lang) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (lang == null)
      return null;
    var langElementList = split(lang, ['-']);
    var findSelectLanguageList = this;
    tmp$ = langElementList.size;
    for (var index = 0; index < tmp$; index++) {
      var langElement = getOrNull(langElementList, index);
      var findSelectLanguageListCache = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
      tmp$_0 = findSelectLanguageList.iterator();
      while (tmp$_0.hasNext()) {
        var findSelectLanguageListElement = tmp$_0.next();
        var compareElement = (tmp$_2 = (tmp$_1 = findSelectLanguageListElement.lang) != null ? split(tmp$_1, ['-']) : null) != null ? getOrNull(tmp$_2, index) : null;
        if ((langElement != null ? langElement.toUpperCase() : null) === (compareElement != null ? compareElement.toUpperCase() : null)) {
          findSelectLanguageListCache.add_11rb$(findSelectLanguageListElement);
        }
      }
      findSelectLanguageList = findSelectLanguageListCache;
    }
    if (findSelectLanguageList.size === 0) {
      tmp$_4 = null;
    }
     else {
      tmp$_4 = (tmp$_3 = getOrNull(findSelectLanguageList, 0)) != null ? tmp$_3.lang : null;
    }
    return tmp$_4;
  };
  XMLTV$MultiLanguage$MultiLanguageList.prototype.findSelectLanguage_1 = function (langList) {
    var tmp$;
    tmp$ = langList.iterator();
    while (tmp$.hasNext()) {
      var lang = tmp$.next();
      var selectLanguage = this.findSelectLanguage_0(lang);
      if (selectLanguage != null) {
        return selectLanguage;
      }
    }
    return null;
  };
  XMLTV$MultiLanguage$MultiLanguageList.prototype.getElementsByLanguage_qj8e4y$ = function (langList) {
    var tmp$;
    if (this.size < 1) {
      return null;
    }
    var arrayList = ArrayList_init();
    var selectLanguge = this.findSelectLanguage_1(langList);
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (selectLanguge === element.lang) {
        arrayList.add_11rb$(element);
      }
    }
    return arrayList;
  };
  XMLTV$MultiLanguage$MultiLanguageList.prototype.getElementsByLanguage_alerag$ = function (langs) {
    var tmp$;
    var langList = ArrayList_init();
    for (tmp$ = 0; tmp$ !== langs.length; ++tmp$) {
      var lang = langs[tmp$];
      langList.add_11rb$(lang);
    }
    return this.getElementsByLanguage_qj8e4y$(langList);
  };
  XMLTV$MultiLanguage$MultiLanguageList.prototype.getElementsByLanguage = function () {
    var userLanguage = navigator.language || navigator.userLanguage;
    return this.getElementsByLanguage_alerag$([userLanguage]);
  };
  XMLTV$MultiLanguage$MultiLanguageList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiLanguageList',
    interfaces: [ArrayList]
  };
  function XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init($this) {
    $this = $this || Object.create(XMLTV$MultiLanguage$MultiLanguageList.prototype);
    ArrayList_init($this);
    XMLTV$MultiLanguage$MultiLanguageList.call($this);
    return $this;
  }
  function XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_0(initElements, $this) {
    $this = $this || Object.create(XMLTV$MultiLanguage$MultiLanguageList.prototype);
    ArrayList_init($this);
    XMLTV$MultiLanguage$MultiLanguageList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    return $this;
  }
  function XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_1(initialCapacity, $this) {
    $this = $this || Object.create(XMLTV$MultiLanguage$MultiLanguageList.prototype);
    ArrayList_init_0(initialCapacity, $this);
    XMLTV$MultiLanguage$MultiLanguageList.call($this);
    return $this;
  }
  function XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_2(elements, $this) {
    $this = $this || Object.create(XMLTV$MultiLanguage$MultiLanguageList.prototype);
    ArrayList_init_1(elements, $this);
    XMLTV$MultiLanguage$MultiLanguageList.call($this);
    return $this;
  }
  XMLTV$MultiLanguage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MultiLanguage',
    interfaces: []
  };
  function XMLTV$DisplayName(lang, displayName) {
    if (lang === void 0)
      lang = null;
    if (displayName === void 0)
      displayName = null;
    this.lang_scy6hi$_0 = lang;
    this.displayName = displayName;
  }
  Object.defineProperty(XMLTV$DisplayName.prototype, 'lang', {
    get: function () {
      return this.lang_scy6hi$_0;
    }
  });
  XMLTV$DisplayName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayName',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Icon(src, width, height) {
    if (src === void 0)
      src = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    this.src = src;
    this.width = width;
    this.height = height;
  }
  XMLTV$Icon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Icon',
    interfaces: []
  };
  function XMLTV$Programme(start, stop, pdcStart, vpsStart, showView, videoPlus, clumpidx, titles, subTitles, descs, credits, date, categorys, keywords, languages, origLanguages, length, icon, urls, countrys, episodeNum, video, audio, previouslyShown, premieres, lastChances, new_0, subtitles, rating, starRating, reviews) {
    if (pdcStart === void 0)
      pdcStart = null;
    if (vpsStart === void 0)
      vpsStart = null;
    if (showView === void 0)
      showView = null;
    if (videoPlus === void 0)
      videoPlus = null;
    if (clumpidx === void 0)
      clumpidx = null;
    if (titles === void 0)
      titles = null;
    if (subTitles === void 0)
      subTitles = null;
    if (descs === void 0)
      descs = null;
    if (credits === void 0)
      credits = null;
    if (date === void 0)
      date = null;
    if (categorys === void 0)
      categorys = null;
    if (keywords === void 0)
      keywords = null;
    if (languages === void 0)
      languages = null;
    if (origLanguages === void 0)
      origLanguages = null;
    if (length === void 0)
      length = null;
    if (icon === void 0)
      icon = null;
    if (urls === void 0)
      urls = null;
    if (countrys === void 0)
      countrys = null;
    if (episodeNum === void 0)
      episodeNum = null;
    if (video === void 0)
      video = null;
    if (audio === void 0)
      audio = null;
    if (previouslyShown === void 0)
      previouslyShown = null;
    if (premieres === void 0)
      premieres = null;
    if (lastChances === void 0)
      lastChances = null;
    if (new_0 === void 0)
      new_0 = false;
    if (subtitles === void 0)
      subtitles = null;
    if (rating === void 0)
      rating = null;
    if (starRating === void 0)
      starRating = null;
    if (reviews === void 0)
      reviews = null;
    this.start = start;
    this.stop = stop;
    this.pdcStart = pdcStart;
    this.vpsStart = vpsStart;
    this.showView = showView;
    this.videoPlus = videoPlus;
    this.clumpidx = clumpidx;
    this.titles = titles;
    this.subTitles = subTitles;
    this.descs = descs;
    this.credits = credits;
    this.date = date;
    this.categorys = categorys;
    this.keywords = keywords;
    this.languages = languages;
    this.origLanguages = origLanguages;
    this.length = length;
    this.icon = icon;
    this.urls = urls;
    this.countrys = countrys;
    this.episodeNum = episodeNum;
    this.video = video;
    this.audio = audio;
    this.previouslyShown = previouslyShown;
    this.premieres = premieres;
    this.lastChances = lastChances;
    this.new = new_0;
    this.subtitles = subtitles;
    this.rating = rating;
    this.starRating = starRating;
    this.reviews = reviews;
  }
  function XMLTV$Programme$Title(lang, title) {
    if (lang === void 0)
      lang = null;
    if (title === void 0)
      title = null;
    this.lang_wjmm41$_0 = lang;
    this.title = title;
  }
  Object.defineProperty(XMLTV$Programme$Title.prototype, 'lang', {
    get: function () {
      return this.lang_wjmm41$_0;
    }
  });
  XMLTV$Programme$Title.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Title',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$SubTitle(lang, subTitle) {
    if (lang === void 0)
      lang = null;
    if (subTitle === void 0)
      subTitle = null;
    this.lang_ecqlcz$_0 = lang;
    this.subTitle = subTitle;
  }
  Object.defineProperty(XMLTV$Programme$SubTitle.prototype, 'lang', {
    get: function () {
      return this.lang_ecqlcz$_0;
    }
  });
  XMLTV$Programme$SubTitle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubTitle',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$Desc(lang, desc) {
    if (lang === void 0)
      lang = null;
    if (desc === void 0)
      desc = null;
    this.lang_hsmczu$_0 = lang;
    this.desc = desc;
  }
  Object.defineProperty(XMLTV$Programme$Desc.prototype, 'lang', {
    get: function () {
      return this.lang_hsmczu$_0;
    }
  });
  XMLTV$Programme$Desc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Desc',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$Credits(directors, actors, writers, adapters, producers, composers, editors, presenters, commentators, guests) {
    if (directors === void 0)
      directors = null;
    if (actors === void 0)
      actors = null;
    if (writers === void 0)
      writers = null;
    if (adapters === void 0)
      adapters = null;
    if (producers === void 0)
      producers = null;
    if (composers === void 0)
      composers = null;
    if (editors === void 0)
      editors = null;
    if (presenters === void 0)
      presenters = null;
    if (commentators === void 0)
      commentators = null;
    if (guests === void 0)
      guests = null;
    this.directors = directors;
    this.actors = actors;
    this.writers = writers;
    this.adapters = adapters;
    this.producers = producers;
    this.composers = composers;
    this.editors = editors;
    this.presenters = presenters;
    this.commentators = commentators;
    this.guests = guests;
  }
  function XMLTV$Programme$Credits$Actor(role, actor) {
    if (role === void 0)
      role = null;
    if (actor === void 0)
      actor = null;
    this.role = role;
    this.actor = actor;
  }
  XMLTV$Programme$Credits$Actor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Actor',
    interfaces: []
  };
  XMLTV$Programme$Credits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Credits',
    interfaces: []
  };
  function XMLTV$Programme$Category(lang, category) {
    if (lang === void 0)
      lang = null;
    if (category === void 0)
      category = null;
    this.lang_gzbo4j$_0 = lang;
    this.category = category;
  }
  Object.defineProperty(XMLTV$Programme$Category.prototype, 'lang', {
    get: function () {
      return this.lang_gzbo4j$_0;
    }
  });
  XMLTV$Programme$Category.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Category',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$Keyword(lang, keyword) {
    if (lang === void 0)
      lang = null;
    if (keyword === void 0)
      keyword = null;
    this.lang_1q3jkw$_0 = lang;
    this.keyword = keyword;
  }
  Object.defineProperty(XMLTV$Programme$Keyword.prototype, 'lang', {
    get: function () {
      return this.lang_1q3jkw$_0;
    }
  });
  XMLTV$Programme$Keyword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Keyword',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$Language(lang, language) {
    if (lang === void 0)
      lang = null;
    if (language === void 0)
      language = null;
    this.lang_cz5077$_0 = lang;
    this.language = language;
  }
  Object.defineProperty(XMLTV$Programme$Language.prototype, 'lang', {
    get: function () {
      return this.lang_cz5077$_0;
    }
  });
  XMLTV$Programme$Language.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Language',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$OrigLanguage(lang, origLanguage) {
    if (lang === void 0)
      lang = null;
    if (origLanguage === void 0)
      origLanguage = null;
    this.lang_bmvppa$_0 = lang;
    this.origLanguage = origLanguage;
  }
  Object.defineProperty(XMLTV$Programme$OrigLanguage.prototype, 'lang', {
    get: function () {
      return this.lang_bmvppa$_0;
    }
  });
  XMLTV$Programme$OrigLanguage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrigLanguage',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$Length(units, length) {
    if (units === void 0)
      units = null;
    if (length === void 0)
      length = null;
    this.units = units;
    this.length = length;
  }
  XMLTV$Programme$Length.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Length',
    interfaces: []
  };
  function XMLTV$Programme$Country(lang, country) {
    if (lang === void 0)
      lang = null;
    if (country === void 0)
      country = null;
    this.lang_a6jevh$_0 = lang;
    this.country = country;
  }
  Object.defineProperty(XMLTV$Programme$Country.prototype, 'lang', {
    get: function () {
      return this.lang_a6jevh$_0;
    }
  });
  XMLTV$Programme$Country.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Country',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$EpisodeNum(system, episodeNum) {
    if (system === void 0)
      system = null;
    if (episodeNum === void 0)
      episodeNum = null;
    this.system = system;
    this.episodeNum = episodeNum;
  }
  XMLTV$Programme$EpisodeNum.prototype.getSeason = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      var number = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
      if (number != null) {
        tmp$_5 = number + 1 | 0;
      }
       else {
        tmp$_5 = number;
      }
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalSeason = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getEpisode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      var number = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 1) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
      if (number != null) {
        tmp$_5 = number + 1 | 0;
      }
       else {
        tmp$_5 = number;
      }
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalEpisode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 1) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getPart = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      var number = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 2) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
      if (number != null) {
        tmp$_5 = number + 1 | 0;
      }
       else {
        tmp$_5 = number;
      }
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalPart = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 2) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EpisodeNum',
    interfaces: []
  };
  function XMLTV$Programme$Video(present, colour, aspect, quality) {
    if (present === void 0)
      present = null;
    if (colour === void 0)
      colour = null;
    if (aspect === void 0)
      aspect = null;
    if (quality === void 0)
      quality = null;
    this.present = present;
    this.colour = colour;
    this.aspect = aspect;
    this.quality = quality;
  }
  XMLTV$Programme$Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  function XMLTV$Programme$Audio(present, stereo) {
    if (present === void 0)
      present = null;
    if (stereo === void 0)
      stereo = null;
    this.present = present;
    this.stereo = stereo;
  }
  XMLTV$Programme$Audio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Audio',
    interfaces: []
  };
  function XMLTV$Programme$PreviouslyShown(start, channel) {
    if (start === void 0)
      start = null;
    if (channel === void 0)
      channel = null;
    this.start = start;
    this.channel = channel;
  }
  XMLTV$Programme$PreviouslyShown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreviouslyShown',
    interfaces: []
  };
  function XMLTV$Programme$Premiere(lang, premiere) {
    if (lang === void 0)
      lang = null;
    if (premiere === void 0)
      premiere = null;
    this.lang_ix2bxe$_0 = lang;
    this.premiere = premiere;
  }
  Object.defineProperty(XMLTV$Programme$Premiere.prototype, 'lang', {
    get: function () {
      return this.lang_ix2bxe$_0;
    }
  });
  XMLTV$Programme$Premiere.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Premiere',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$LastChance(lang, lastChance) {
    if (lang === void 0)
      lang = null;
    if (lastChance === void 0)
      lastChance = null;
    this.lang_ieq6b5$_0 = lang;
    this.lastChance = lastChance;
  }
  Object.defineProperty(XMLTV$Programme$LastChance.prototype, 'lang', {
    get: function () {
      return this.lang_ieq6b5$_0;
    }
  });
  XMLTV$Programme$LastChance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LastChance',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$Subtitles(type, language) {
    if (type === void 0)
      type = null;
    if (language === void 0)
      language = null;
    this.type = type;
    this.language = language;
  }
  XMLTV$Programme$Subtitles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Subtitles',
    interfaces: []
  };
  function XMLTV$Programme$Rating(system, value, icon) {
    if (system === void 0)
      system = null;
    if (value === void 0)
      value = null;
    if (icon === void 0)
      icon = null;
    this.system = system;
    this.value = value;
    this.icon = icon;
  }
  XMLTV$Programme$Rating.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rating',
    interfaces: []
  };
  function XMLTV$Programme$StarRating(system, value, icon) {
    if (system === void 0)
      system = null;
    if (value === void 0)
      value = null;
    if (icon === void 0)
      icon = null;
    this.system = system;
    this.value = value;
    this.icon = icon;
  }
  XMLTV$Programme$StarRating.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StarRating',
    interfaces: []
  };
  function XMLTV$Programme$Review(type, source, reviewer, lang, review) {
    if (type === void 0)
      type = null;
    if (source === void 0)
      source = null;
    if (reviewer === void 0)
      reviewer = null;
    if (lang === void 0)
      lang = null;
    if (review === void 0)
      review = null;
    this.type = type;
    this.source = source;
    this.reviewer = reviewer;
    this.lang_i28xod$_0 = lang;
    this.review = review;
  }
  Object.defineProperty(XMLTV$Programme$Review.prototype, 'lang', {
    get: function () {
      return this.lang_i28xod$_0;
    }
  });
  XMLTV$Programme$Review.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Review',
    interfaces: [XMLTV$MultiLanguage]
  };
  function XMLTV$Programme$ProgrammeList() {
  }
  XMLTV$Programme$ProgrammeList.prototype.getProgrammeByTime_qjzqsm$ = function (date) {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var programme = tmp$.next();
      if (XMLTV$Companion_getInstance().compareTo_fsx041$(programme.start, date) <= 0 && XMLTV$Companion_getInstance().compareTo_fsx041$(date, programme.stop) < 0) {
        return programme;
      }
    }
    return null;
  };
  XMLTV$Programme$ProgrammeList.prototype.getProgrammeByTime = function () {
    return this.getProgrammeByTime_qjzqsm$(new Date());
  };
  XMLTV$Programme$ProgrammeList.prototype.getClosestNextProgrammeByTime_qjzqsm$ = function (date) {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var programme = tmp$.next();
      if (XMLTV$Companion_getInstance().compareTo_fsx041$(date, programme.start) <= 0) {
        return programme;
      }
    }
    return null;
  };
  XMLTV$Programme$ProgrammeList.prototype.getClosestPreviousProgrammeByTime_qjzqsm$ = function (date) {
    var i = this.size - 1 | 0;
    while (0 < i) {
      if (XMLTV$Companion_getInstance().compareTo_fsx041$(this.get_za3lpa$(i).stop, date) <= 0) {
        return this.get_za3lpa$(i);
      }
      i = i - 1 | 0;
    }
    return null;
  };
  XMLTV$Programme$ProgrammeList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgrammeList',
    interfaces: [ArrayList]
  };
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_2(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_2.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init($this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init($this);
    XMLTV$Programme$ProgrammeList.call($this);
    if ($this.size > 1) {
      sortWith($this, new Comparator$ObjectLiteral_2(compareBy$lambda_1(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda)));
    }
    return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda(programme) {
    return programme.start.getTime();
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_0(initElements, $this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init($this);
    XMLTV$Programme$ProgrammeList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    return $this;
  }
  var compareBy$lambda_2 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_3(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_3.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_1(initialCapacity, $this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init_0(initialCapacity, $this);
    XMLTV$Programme$ProgrammeList.call($this);
    if ($this.size > 1) {
      sortWith($this, new Comparator$ObjectLiteral_3(compareBy$lambda_2(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_0)));
    }
    return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_0(programme) {
    return programme.start.getTime();
  }
  var compareBy$lambda_3 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_4(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_4.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_2(elements, $this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init_1(elements, $this);
    XMLTV$Programme$ProgrammeList.call($this);
    if ($this.size > 1) {
      sortWith($this, new Comparator$ObjectLiteral_4(compareBy$lambda_3(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_1)));
    }
    return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_1(programme) {
    return programme.start.getTime();
  }
  XMLTV$Programme.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Programme',
    interfaces: []
  };
  function XMLTV$Companion() {
    XMLTV$Companion_instance = this;
  }
  function XMLTV$Companion$parseXMLTV$lambda(closure$onParsedXMLTVListener, closure$epgID, this$XMLTV$) {
    return function (xmlHttp) {
      closure$onParsedXMLTVListener(this$XMLTV$.getXMLTV_0(xmlHttp.responseXML, closure$epgID));
    };
  }
  XMLTV$Companion.prototype.parseXMLTV_wwqxya$ = function (xmltvSrc, epgID, onParsedXMLTVListener) {
    LoadFile_getInstance().load_phn05g$(xmltvSrc, XMLTV$Companion$parseXMLTV$lambda(onParsedXMLTVListener, epgID, this));
  };
  XMLTV$Companion.prototype.compareTo_fsx041$ = function ($receiver, date) {
    return numberToInt($receiver.getTime() - date.getTime());
  };
  XMLTV$Companion.prototype.timeZoneStringToTimeZone_0 = function (timeZoneString) {
    try {
      var timeZoneHour = toDouble(String.fromCharCode(timeZoneString.charCodeAt(1)) + String.fromCharCode(timeZoneString.charCodeAt(2)));
      var timeZoneMinute = toDouble(String.fromCharCode(timeZoneString.charCodeAt(3)) + String.fromCharCode(timeZoneString.charCodeAt(4)));
      if (24 < timeZoneHour || 60 < timeZoneMinute) {
        return null;
      }
      switch (timeZoneString.charCodeAt(0)) {
        case 43:
        case 45:
          timeZoneHour *= toDouble(String.fromCharCode(timeZoneString.charCodeAt(0)) + '1');
          timeZoneMinute *= toDouble(String.fromCharCode(timeZoneString.charCodeAt(0)) + '1');
          break;
        default:return null;
      }
      return numberToInt((timeZoneHour + timeZoneMinute / 60) * 60);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      }
       else
        throw e;
    }
  };
  XMLTV$Companion.prototype.changeTimeZone_0 = function (date, timeZone) {
    var utc = date.getTime() - ((timeZone * 60 | 0) * 1000 | 0);
    return new Date(utc + (((-date.getTimezoneOffset() | 0) * 60 | 0) * 1000 | 0));
  };
  XMLTV$Companion.prototype.dateStringToDate_0 = function (dateString) {
    var tmp$;
    try {
      var year = toInt(String.fromCharCode(dateString.charCodeAt(0)) + String.fromCharCode(dateString.charCodeAt(1)) + String.fromCharCode(dateString.charCodeAt(2)) + String.fromCharCode(dateString.charCodeAt(3)));
      var month = toInt(String.fromCharCode(dateString.charCodeAt(4)) + String.fromCharCode(dateString.charCodeAt(5)));
      var day = toInt(String.fromCharCode(dateString.charCodeAt(6)) + String.fromCharCode(dateString.charCodeAt(7)));
      var hour = toInt(String.fromCharCode(dateString.charCodeAt(8)) + String.fromCharCode(dateString.charCodeAt(9)));
      var minute = toInt(String.fromCharCode(dateString.charCodeAt(10)) + String.fromCharCode(dateString.charCodeAt(11)));
      var second = toInt(String.fromCharCode(dateString.charCodeAt(12)) + String.fromCharCode(dateString.charCodeAt(13)));
      var timeZone = String.fromCharCode(dateString.charCodeAt(15)) + String.fromCharCode(dateString.charCodeAt(16)) + String.fromCharCode(dateString.charCodeAt(17)) + String.fromCharCode(dateString.charCodeAt(18)) + String.fromCharCode(dateString.charCodeAt(19));
      return this.changeTimeZone_0(new Date(year, month - 1 | 0, day, hour, minute, second), (tmp$ = this.timeZoneStringToTimeZone_0(timeZone)) != null ? tmp$ : 0);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      }
       else
        throw e;
    }
  };
  XMLTV$Companion.prototype.getXMLTV_0 = function (xmltvDoc, epgID) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var i = 0;
    while (i < ((tmp$_0 = (tmp$ = xmltvDoc != null ? xmltvDoc.getElementsByTagName('channel') : null) != null ? tmp$.length : null) != null ? tmp$_0 : 0)) {
      if (equals((tmp$_2 = (tmp$_1 = xmltvDoc != null ? xmltvDoc.getElementsByTagName('channel') : null) != null ? tmp$_1[i] : null) != null ? tmp$_2.getAttribute('id') : null, epgID)) {
        return new XMLTV(this.getDisplayNames_0(xmltvDoc.getElementsByTagName('channel')[i]), this.getIcon_0(xmltvDoc.getElementsByTagName('channel')[i]), this.getUrls_0(xmltvDoc.getElementsByTagName('channel')[i]), this.getProgrammes_0(xmltvDoc, epgID));
      }
      i = i + 1 | 0;
    }
    return new XMLTV();
  };
  XMLTV$Companion.prototype.getDisplayNames_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('displayName') : null) == null) {
      return null;
    }
    var displayNames = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('displayName').length) {
      var lang = this.getLang_0(element.getElementsByTagName('displayName')[i]);
      var displayName = (tmp$ = element.getElementsByTagName('displayName')[i]) != null ? tmp$.innerHTML : null;
      displayNames.add_11rb$(new XMLTV$DisplayName(lang, displayName));
      i = i + 1 | 0;
    }
    return displayNames;
  };
  XMLTV$Companion.prototype.getLang_0 = function (element) {
    return element != null ? element.getAttribute('Lang') : null;
  };
  XMLTV$Companion.prototype.getIcon_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('icon') : null) == null) {
      return null;
    }
    return new XMLTV$Icon(this.getSrc_0(element.getElementsByTagName('icon')[0]), this.getWidth_0(element.getElementsByTagName('icon')[0]), this.getHeight_0(element.getElementsByTagName('icon')[0]));
  };
  XMLTV$Companion.prototype.getSrc_0 = function (element) {
    return element != null ? element.getAttribute('src') : null;
  };
  XMLTV$Companion.prototype.getWidth_0 = function (element) {
    var tmp$;
    return (tmp$ = element != null ? element.getAttribute('width') : null) != null ? toIntOrNull(tmp$) : null;
  };
  XMLTV$Companion.prototype.getHeight_0 = function (element) {
    var tmp$;
    return (tmp$ = element != null ? element.getAttribute('height') : null) != null ? toIntOrNull(tmp$) : null;
  };
  XMLTV$Companion.prototype.getUrls_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1;
    if ((element != null ? element.getElementsByTagName('url') : null) == null) {
      return null;
    }
    var urls = ArrayList_init();
    var i = 0;
    while (i < ((tmp$ = element != null ? element.getElementsByTagName('url') : null) != null ? tmp$.length : null)) {
      var url = (tmp$_1 = (tmp$_0 = element != null ? element.getElementsByTagName('url') : null) != null ? tmp$_0[i] : null) != null ? tmp$_1.innerHTML : null;
      if (url != null) {
        urls.add_11rb$(url);
      }
      i = i + 1 | 0;
    }
    return urls;
  };
  function XMLTV$Companion$getProgrammes$lambda(programme) {
    return programme.start.getTime();
  }
  var compareBy$lambda_4 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_5(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_5.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_5.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  XMLTV$Companion.prototype.getProgrammes_0 = function (xmltvDoc, epgID) {
    var tmp$;
    if ((xmltvDoc != null ? xmltvDoc.getElementsByTagName('programme') : null) == null) {
      return null;
    }
    var programmes = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init();
    var i = 0;
    while (i < xmltvDoc.getElementsByTagName('programme').length) {
      if (equals((tmp$ = xmltvDoc.getElementsByTagName('programme')[i]) != null ? tmp$.getAttribute('channel') : null, epgID)) {
        var start = this.getStart_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var stop = this.getStop_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var pdcStart = this.getPDCStart_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var vpsStart = this.getVPSStart_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var showView = this.getShowView_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var videoPlus = this.getVideoPlus_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var clumpidx = this.getClumpidx_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var titles = this.getTitles_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var subTitles = this.getSubTitles_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var descs = this.getDescs_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var credits = this.getCredits_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var date = this.getDate_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var categorys = this.getCategorys_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var keywords = this.getKeywords_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var languages = this.getLanguages_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var origLanguages = this.getOrigLanguages_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var length = this.getLength_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var icon = this.getIcon_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var urls = this.getUrls_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var countrys = this.getCountrys_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var episodeNum = this.getEpisodeNum_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var video = this.getVideo_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var audio = this.getAudio_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var previouslyShown = this.getPreviouslyShown_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var premieres = this.getPremieres_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var lastChances = this.getLastChances_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var new_0 = this.getNew_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var subtitles = this.getSubtitles_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var rating = this.getRating_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var starRating = this.getStarRating_0(xmltvDoc.getElementsByTagName('programme')[i]);
        var reviews = this.getReviews_0(xmltvDoc.getElementsByTagName('programme')[i]);
        if (start != null && stop != null && this.compareTo_fsx041$(start, stop) < 0) {
          programmes.add_11rb$(new XMLTV$Programme(start, stop, pdcStart, vpsStart, showView, videoPlus, clumpidx, titles, subTitles, descs, credits, date, categorys, keywords, languages, origLanguages, length, icon, urls, countrys, episodeNum, video, audio, previouslyShown, premieres, lastChances, new_0, subtitles, rating, starRating, reviews));
        }
      }
      i = i + 1 | 0;
    }
    if (programmes.size > 1) {
      sortWith(programmes, new Comparator$ObjectLiteral_5(compareBy$lambda_4(XMLTV$Companion$getProgrammes$lambda)));
    }
    return programmes;
  };
  XMLTV$Companion.prototype.getStart_0 = function (element) {
    var tmp$;
    return this.dateStringToDate_0((tmp$ = element != null ? element.getAttribute('start') : null) != null ? tmp$ : '');
  };
  XMLTV$Companion.prototype.getStop_0 = function (element) {
    var tmp$;
    return this.dateStringToDate_0((tmp$ = element != null ? element.getAttribute('stop') : null) != null ? tmp$ : '');
  };
  XMLTV$Companion.prototype.getPDCStart_0 = function (element) {
    return element != null ? element.getAttribute('pdc-start') : null;
  };
  XMLTV$Companion.prototype.getVPSStart_0 = function (element) {
    return element != null ? element.getAttribute('vps-start') : null;
  };
  XMLTV$Companion.prototype.getShowView_0 = function (element) {
    return element != null ? element.getAttribute('showview') : null;
  };
  XMLTV$Companion.prototype.getVideoPlus_0 = function (element) {
    return element != null ? element.getAttribute('videoplus') : null;
  };
  XMLTV$Companion.prototype.getClumpidx_0 = function (element) {
    return element != null ? element.getAttribute('clumpidx') : null;
  };
  XMLTV$Companion.prototype.getTitles_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if ((element != null ? element.getElementsByTagName('title') : null) == null) {
      return null;
    }
    var titles = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < ((tmp$ = element != null ? element.getElementsByTagName('title') : null) != null ? tmp$.length : null)) {
      var lang = this.getLang_0((tmp$_0 = element != null ? element.getElementsByTagName('title') : null) != null ? tmp$_0[i] : null);
      var title = (tmp$_2 = (tmp$_1 = element != null ? element.getElementsByTagName('title') : null) != null ? tmp$_1[i] : null) != null ? tmp$_2.innerHTML : null;
      titles.add_11rb$(new XMLTV$Programme$Title(lang, title));
      i = i + 1 | 0;
    }
    return titles;
  };
  XMLTV$Companion.prototype.getSubTitles_0 = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if ((element != null ? element.getElementsByTagName('sub-title') : null) == null) {
      return null;
    }
    var subTitles = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < ((tmp$ = element != null ? element.getElementsByTagName('sub-title') : null) != null ? tmp$.length : null)) {
      var lang = this.getLang_0((tmp$_0 = element != null ? element.getElementsByTagName('sub-title') : null) != null ? tmp$_0[i] : null);
      var subTitle = (tmp$_2 = (tmp$_1 = element != null ? element.getElementsByTagName('sub-title') : null) != null ? tmp$_1[i] : null) != null ? tmp$_2.innerHTML : null;
      subTitles.add_11rb$(new XMLTV$Programme$SubTitle(lang, subTitle));
      i = i + 1 | 0;
    }
    return subTitles;
  };
  XMLTV$Companion.prototype.getDescs_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('desc') : null) == null) {
      return null;
    }
    var descs = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('desc').length) {
      var lang = this.getLang_0(element.getElementsByTagName('desc')[i]);
      var desc = (tmp$ = element.getElementsByTagName('desc')[i]) != null ? tmp$.innerHTML : null;
      descs.add_11rb$(new XMLTV$Programme$Desc(lang, desc));
      i = i + 1 | 0;
    }
    return descs;
  };
  XMLTV$Companion.prototype.getCredits_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('credits') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$Credits(this.getDirectors_0(element.getElementsByTagName('credits')[0]), this.getActors_0(element.getElementsByTagName('credits')[0]), this.getWriters_0(element.getElementsByTagName('credits')[0]), this.getAdapters_0(element.getElementsByTagName('credits')[0]), this.getProducers_0(element.getElementsByTagName('credits')[0]), this.getComposers_0(element.getElementsByTagName('credits')[0]), this.getEditors_0(element.getElementsByTagName('credits')[0]), this.getPresenters_0(element.getElementsByTagName('credits')[0]), this.getCommentators_0(element.getElementsByTagName('credits')[0]), this.getGuests_0(element.getElementsByTagName('credits')[0]));
  };
  XMLTV$Companion.prototype.getDirectors_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('director') : null) == null) {
      return null;
    }
    var directors = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('director').length) {
      var director = (tmp$ = element.getElementsByTagName('director')[i]) != null ? tmp$.innerHTML : null;
      if (director != null) {
        directors.add_11rb$(director);
      }
      i = i + 1 | 0;
    }
    return directors;
  };
  XMLTV$Companion.prototype.getActors_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('actor') : null) == null) {
      return null;
    }
    var actors = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('actor').length) {
      var role = this.getRole_0(element.getElementsByTagName('actor')[i]);
      var actor = (tmp$ = element.getElementsByTagName('actor')[i]) != null ? tmp$.innerHTML : null;
      actors.add_11rb$(new XMLTV$Programme$Credits$Actor(role, actor));
      i = i + 1 | 0;
    }
    return actors;
  };
  XMLTV$Companion.prototype.getRole_0 = function (element) {
    return element != null ? element.getAttribute('rote') : null;
  };
  XMLTV$Companion.prototype.getWriters_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('writer') : null) == null) {
      return null;
    }
    var writers = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('writer').length) {
      var writer = (tmp$ = element.getElementsByTagName('writer')[i]) != null ? tmp$.innerHTML : null;
      if (writer != null) {
        writers.add_11rb$(writer);
      }
      i = i + 1 | 0;
    }
    return writers;
  };
  XMLTV$Companion.prototype.getAdapters_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('adapter') : null) == null) {
      return null;
    }
    var adapters = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('adapter').length) {
      var adapter = (tmp$ = element.getElementsByTagName('adapter')[i]) != null ? tmp$.innerHTML : null;
      if (adapter != null) {
        adapters.add_11rb$(adapter);
      }
      i = i + 1 | 0;
    }
    return adapters;
  };
  XMLTV$Companion.prototype.getProducers_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('producer') : null) == null) {
      return null;
    }
    var producers = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('producer').length) {
      var producer = (tmp$ = element.getElementsByTagName('producer')[i]) != null ? tmp$.innerHTML : null;
      if (producer != null) {
        producers.add_11rb$(producer);
      }
      i = i + 1 | 0;
    }
    return producers;
  };
  XMLTV$Companion.prototype.getComposers_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('composer') : null) == null) {
      return null;
    }
    var composers = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('composer').length) {
      var composer = (tmp$ = element.getElementsByTagName('composer')[i]) != null ? tmp$.innerHTML : null;
      if (composer != null) {
        composers.add_11rb$(composer);
      }
      i = i + 1 | 0;
    }
    return composers;
  };
  XMLTV$Companion.prototype.getEditors_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('editor') : null) == null) {
      return null;
    }
    var editors = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('editor').length) {
      var editor = (tmp$ = element.getElementsByTagName('editor')[i]) != null ? tmp$.innerHTML : null;
      if (editor != null) {
        editors.add_11rb$(editor);
      }
      i = i + 1 | 0;
    }
    return editors;
  };
  XMLTV$Companion.prototype.getPresenters_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('presenter') : null) == null) {
      return null;
    }
    var presenters = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('presenter').length) {
      var presenter = (tmp$ = element.getElementsByTagName('presenter')[i]) != null ? tmp$.innerHTML : null;
      if (presenter != null) {
        presenters.add_11rb$(presenter);
      }
      i = i + 1 | 0;
    }
    return presenters;
  };
  XMLTV$Companion.prototype.getCommentators_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('commentator') : null) == null) {
      return null;
    }
    var commentators = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('commentator').length) {
      var commentator = (tmp$ = element.getElementsByTagName('commentator')[i]) != null ? tmp$.innerHTML : null;
      if (commentator != null) {
        commentators.add_11rb$(commentator);
      }
      i = i + 1 | 0;
    }
    return commentators;
  };
  XMLTV$Companion.prototype.getGuests_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('guest') : null) == null) {
      return null;
    }
    var guests = ArrayList_init();
    var i = 0;
    while (i < element.getElementsByTagName('guest').length) {
      var guest = (tmp$ = element.getElementsByTagName('guest')[i]) != null ? tmp$.innerHTML : null;
      if (guest != null) {
        guests.add_11rb$(guest);
      }
      i = i + 1 | 0;
    }
    return guests;
  };
  XMLTV$Companion.prototype.getDate_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('date') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getCategorys_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('category') : null) == null) {
      return null;
    }
    var categorys = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('category').length) {
      var lang = this.getLang_0(element.getElementsByTagName('category')[i]);
      var category = (tmp$ = element.getElementsByTagName('category')[i]) != null ? tmp$.innerHTML : null;
      categorys.add_11rb$(new XMLTV$Programme$Category(lang, category));
      i = i + 1 | 0;
    }
    return categorys;
  };
  XMLTV$Companion.prototype.getKeywords_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('keyword') : null) == null) {
      return null;
    }
    var keywords = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('keyword').length) {
      var lang = this.getLang_0(element.getElementsByTagName('keyword')[i]);
      var keyword = (tmp$ = element.getElementsByTagName('keyword')[i]) != null ? tmp$.innerHTML : null;
      keywords.add_11rb$(new XMLTV$Programme$Keyword(lang, keyword));
      i = i + 1 | 0;
    }
    return keywords;
  };
  XMLTV$Companion.prototype.getLanguages_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('language') : null) == null) {
      return null;
    }
    var languages = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('language').length) {
      var lang = this.getLang_0(element.getElementsByTagName('language')[i]);
      var language = (tmp$ = element.getElementsByTagName('language')[i]) != null ? tmp$.innerHTML : null;
      languages.add_11rb$(new XMLTV$Programme$Language(lang, language));
      i = i + 1 | 0;
    }
    return languages;
  };
  XMLTV$Companion.prototype.getOrigLanguages_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('origLanguage') : null) == null) {
      return null;
    }
    var origLanguages = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('origLanguage').length) {
      var lang = this.getLang_0(element.getElementsByTagName('origLanguage')[i]);
      var origLanguage = (tmp$ = element.getElementsByTagName('origLanguage')[i]) != null ? tmp$.innerHTML : null;
      origLanguages.add_11rb$(new XMLTV$Programme$OrigLanguage(lang, origLanguage));
      i = i + 1 | 0;
    }
    return origLanguages;
  };
  XMLTV$Companion.prototype.getLength_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('length') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$Length(this.getUnits_0(element.getElementsByTagName('length')[0]), (tmp$ = element.getElementsByTagName('length')[0]) != null ? tmp$.innerHTML : null);
  };
  XMLTV$Companion.prototype.getUnits_0 = function (element) {
    return element != null ? element.getAttribute('units') : null;
  };
  XMLTV$Companion.prototype.getCountrys_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('country') : null) == null) {
      return null;
    }
    var countrys = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('country').length) {
      var lang = this.getLang_0(element.getElementsByTagName('country')[i]);
      var country = (tmp$ = element.getElementsByTagName('wcountry')[i]) != null ? tmp$.innerHTML : null;
      countrys.add_11rb$(new XMLTV$Programme$Country(lang, country));
      i = i + 1 | 0;
    }
    return countrys;
  };
  XMLTV$Companion.prototype.getEpisodeNum_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('episode-num') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$EpisodeNum(this.getSystem_0(element.getElementsByTagName('episode-num')[0]), (tmp$ = element.getElementsByTagName('episode-num')[0]) != null ? tmp$.innerHTML : null);
  };
  XMLTV$Companion.prototype.getSystem_0 = function (element) {
    return element != null ? element.getAttribute('system') : null;
  };
  XMLTV$Companion.prototype.getVideo_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('video') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$Video(this.getPresent_0(element.getElementsByTagName('video')[0]), this.getColour_0(element.getElementsByTagName('video')[0]), this.getAspect_0(element.getElementsByTagName('video')[0]), this.getQuality_0(element.getElementsByTagName('video')[0]));
  };
  XMLTV$Companion.prototype.getPresent_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('present') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getColour_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('colour') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getAspect_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('aspect') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getQuality_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('quality') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getAudio_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('audio') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$Audio(this.getPresent_0(element.getElementsByTagName('audio')[0]), this.getStereo_0(element.getElementsByTagName('audio')[0]));
  };
  XMLTV$Companion.prototype.getStereo_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('stereo') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getPreviouslyShown_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('previously-shown') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$PreviouslyShown(this.getStart_0(element.getElementsByTagName('previously-shown')[0]), this.getChannel_0(element.getElementsByTagName('previously-shown')[0]));
  };
  XMLTV$Companion.prototype.getChannel_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('channel') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getPremieres_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('premiere') : null) == null) {
      return null;
    }
    var premieres = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('premiere').length) {
      var lang = this.getLang_0(element.getElementsByTagName('premiere')[i]);
      var premiere = (tmp$ = element.getElementsByTagName('premiere')[i]) != null ? tmp$.innerHTML : null;
      premieres.add_11rb$(new XMLTV$Programme$Premiere(lang, premiere));
      i = i + 1 | 0;
    }
    return premieres;
  };
  XMLTV$Companion.prototype.getLastChances_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('last-chance') : null) == null) {
      return null;
    }
    var lastChances = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('last-chance').length) {
      var lang = this.getLang_0(element.getElementsByTagName('last-chance')[i]);
      var lastChance = (tmp$ = element.getElementsByTagName('last-chance')[i]) != null ? tmp$.innerHTML : null;
      lastChances.add_11rb$(new XMLTV$Programme$LastChance(lang, lastChance));
      i = i + 1 | 0;
    }
    return lastChances;
  };
  XMLTV$Companion.prototype.getNew_0 = function (element) {
    var tmp$;
    return ((tmp$ = element != null ? element.getElementsByTagName('new') : null) != null ? tmp$[0] : null) != null;
  };
  XMLTV$Companion.prototype.getSubtitles_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('video') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$Subtitles(this.getType_0(element.getElementsByTagName('video')[0]), this.getLanguage_0(element.getElementsByTagName('video')[0]));
  };
  XMLTV$Companion.prototype.getType_0 = function (element) {
    return element != null ? element.getAttribute('type') : null;
  };
  XMLTV$Companion.prototype.getLanguage_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('language') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getRating_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('rating') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$Rating(this.getSystem_0(element.getElementsByTagName('rating')[0]), this.getValue_0(element.getElementsByTagName('rating')[0]), this.getIcon_0(element.getElementsByTagName('rating')[0]));
  };
  XMLTV$Companion.prototype.getValue_0 = function (element) {
    return element != null ? element.getAttribute('value') : null;
  };
  XMLTV$Companion.prototype.getStarRating_0 = function (element) {
    if ((element != null ? element.getElementsByTagName('star-rating') : null) == null) {
      return null;
    }
    return new XMLTV$Programme$StarRating(this.getSystem_0(element.getElementsByTagName('star-rating')[0]), this.getValue_0(element.getElementsByTagName('star-rating')[0]), this.getIcon_0(element.getElementsByTagName('star-rating')[0]));
  };
  XMLTV$Companion.prototype.getReviews_0 = function (element) {
    var tmp$;
    if ((element != null ? element.getElementsByTagName('review') : null) == null) {
      return null;
    }
    var reviews = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init();
    var i = 0;
    while (i < element.getElementsByTagName('review').length) {
      var type = this.getType_0(element.getElementsByTagName('review')[i]);
      var source = this.getSource_0(element.getElementsByTagName('review')[i]);
      var reviewer = this.getReviewer_0(element.getElementsByTagName('review')[i]);
      var lang = this.getLang_0(element.getElementsByTagName('review')[i]);
      var review = (tmp$ = element.getElementsByTagName('review')[i]) != null ? tmp$.innerHTML : null;
      reviews.add_11rb$(new XMLTV$Programme$Review(type, source, reviewer, lang, review));
      i = i + 1 | 0;
    }
    return reviews;
  };
  XMLTV$Companion.prototype.getSource_0 = function (element) {
    return element != null ? element.getAttribute('source') : null;
  };
  XMLTV$Companion.prototype.getReviewer_0 = function (element) {
    return element != null ? element.getAttribute('reviewer') : null;
  };
  XMLTV$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var XMLTV$Companion_instance = null;
  function XMLTV$Companion_getInstance() {
    if (XMLTV$Companion_instance === null) {
      new XMLTV$Companion();
    }
    return XMLTV$Companion_instance;
  }
  XMLTV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XMLTV',
    interfaces: []
  };
  var package$org = _.org || (_.org = {});
  var package$sourcekey = package$org.sourcekey || (package$org.sourcekey = {});
  var package$hknbp = package$sourcekey.hknbp || (package$sourcekey.hknbp = {});
  var package$hknbp_core = package$hknbp.hknbp_core || (package$hknbp.hknbp_core = {});
  Object.defineProperty(package$hknbp_core, 'AboutWindow', {
    get: AboutWindow_getInstance
  });
  ArrayLinkList.OnNodeEventListener = ArrayLinkList$OnNodeEventListener;
  Object.defineProperty(ArrayLinkList, 'Companion', {
    get: ArrayLinkList$Companion_getInstance
  });
  package$hknbp_core.ArrayLinkList_init_i5x0yv$ = ArrayLinkList_init;
  package$hknbp_core.ArrayLinkList_init_vzjx9f$ = ArrayLinkList_init_0;
  package$hknbp_core.ArrayLinkList = ArrayLinkList;
  Object.defineProperty(package$hknbp_core, 'AudioDescription', {
    get: AudioDescription_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'ChannelInformation', {
    get: ChannelInformation_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'ConsentPanel', {
    get: ConsentPanel_getInstance
  });
  Object.defineProperty(Dialogue, 'Companion', {
    get: Dialogue$Companion_getInstance
  });
  package$hknbp_core.Dialogue = Dialogue;
  Object.defineProperty(package$hknbp_core, 'EPG', {
    get: EPG_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'EnteringNumberBox', {
    get: EnteringNumberBox_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'FullScreenButton', {
    get: FullScreenButton_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'InDisplayMutedButton', {
    get: InDisplayMutedButton_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'LoadFile', {
    get: LoadFile_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'jQuery', {
    get: function () {
      return jQuery;
    }
  });
  Object.defineProperty(package$hknbp_core, 'userLanguageList', {
    get: function () {
      return userLanguageList;
    },
    set: function (value) {
      userLanguageList = value;
    }
  });
  Object.defineProperty(package$hknbp_core, 'tvChannels', {
    get: get_tvChannels,
    set: set_tvChannels
  });
  Object.defineProperty(package$hknbp_core, 'player', {
    get: get_player,
    set: set_player
  });
  package$hknbp_core.designatedChannel = designatedChannel;
  package$hknbp_core.updateChannel = updateChannel;
  package$hknbp_core.main_kand9s$ = main;
  Object.defineProperty(package$hknbp_core, 'Modernizr', {
    get: Modernizr_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'PictureInPictureButton', {
    get: PictureInPictureButton_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'playing', {
    get: Player$OnPlayerEvent$playing_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'notPlaying', {
    get: Player$OnPlayerEvent$notPlaying_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'videoTrackChanged', {
    get: Player$OnPlayerEvent$videoTrackChanged_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'audioTrackChanged', {
    get: Player$OnPlayerEvent$audioTrackChanged_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'subtitleTrackChanged', {
    get: Player$OnPlayerEvent$subtitleTrackChanged_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'volumeChanged', {
    get: Player$OnPlayerEvent$volumeChanged_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'mutedChanged', {
    get: Player$OnPlayerEvent$mutedChanged_getInstance
  });
  Player.OnPlayerEvent = Player$OnPlayerEvent;
  Player.OnPlayerEventListener = Player$OnPlayerEventListener;
  Object.defineProperty(Player$ProgrammableColor, 'red', {
    get: Player$ProgrammableColor$red_getInstance
  });
  Object.defineProperty(Player$ProgrammableColor, 'green', {
    get: Player$ProgrammableColor$green_getInstance
  });
  Object.defineProperty(Player$ProgrammableColor, 'yellow', {
    get: Player$ProgrammableColor$yellow_getInstance
  });
  Object.defineProperty(Player$ProgrammableColor, 'blue', {
    get: Player$ProgrammableColor$blue_getInstance
  });
  Player.ProgrammableColor = Player$ProgrammableColor;
  Object.defineProperty(Player, 'Companion', {
    get: Player$Companion_getInstance
  });
  package$hknbp_core.Player = Player;
  Object.defineProperty(package$hknbp_core, 'PromptBox', {
    get: PromptBox_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'SettingWindow', {
    get: SettingWindow_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'SubtitleDescription', {
    get: SubtitleDescription_getInstance
  });
  TVChannel.Source = TVChannel$Source;
  TVChannel.Information = TVChannel$Information;
  Object.defineProperty(TVChannel, 'Companion', {
    get: TVChannel$Companion_getInstance
  });
  package$hknbp_core.TVChannel = TVChannel;
  Object.defineProperty(Tab3dIndex, 'Companion', {
    get: Tab3dIndex$Companion_getInstance
  });
  package$hknbp_core.Tab3dIndex = Tab3dIndex;
  Object.defineProperty(TrackDescription, 'Companion', {
    get: TrackDescription$Companion_getInstance
  });
  package$hknbp_core.TrackDescription = TrackDescription;
  Object.defineProperty(package$hknbp_core, 'UserControlPanel', {
    get: UserControlPanel_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'VideoDescription', {
    get: VideoDescription_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'VirtualRemote', {
    get: VirtualRemote_getInstance
  });
  Object.defineProperty(WatchingCounter, 'Companion', {
    get: WatchingCounter$Companion_getInstance
  });
  package$hknbp_core.WatchingCounter = WatchingCounter;
  XMLTV$MultiLanguage.MultiLanguageList_init_w3j80s$ = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init;
  XMLTV$MultiLanguage.MultiLanguageList_init_s9eivz$ = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_0;
  XMLTV$MultiLanguage.MultiLanguageList_init_nc4jq$ = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_1;
  XMLTV$MultiLanguage.MultiLanguageList_init_vf20rz$ = XMLTV$MultiLanguage$XMLTV$MultiLanguage$MultiLanguageList_init_2;
  XMLTV$MultiLanguage.MultiLanguageList = XMLTV$MultiLanguage$MultiLanguageList;
  XMLTV.MultiLanguage = XMLTV$MultiLanguage;
  XMLTV.DisplayName = XMLTV$DisplayName;
  XMLTV.Icon = XMLTV$Icon;
  XMLTV$Programme.Title = XMLTV$Programme$Title;
  XMLTV$Programme.SubTitle = XMLTV$Programme$SubTitle;
  XMLTV$Programme.Desc = XMLTV$Programme$Desc;
  XMLTV$Programme$Credits.Actor = XMLTV$Programme$Credits$Actor;
  XMLTV$Programme.Credits = XMLTV$Programme$Credits;
  XMLTV$Programme.Category = XMLTV$Programme$Category;
  XMLTV$Programme.Keyword = XMLTV$Programme$Keyword;
  XMLTV$Programme.Language = XMLTV$Programme$Language;
  XMLTV$Programme.OrigLanguage = XMLTV$Programme$OrigLanguage;
  XMLTV$Programme.Length = XMLTV$Programme$Length;
  XMLTV$Programme.Country = XMLTV$Programme$Country;
  XMLTV$Programme.EpisodeNum = XMLTV$Programme$EpisodeNum;
  XMLTV$Programme.Video = XMLTV$Programme$Video;
  XMLTV$Programme.Audio = XMLTV$Programme$Audio;
  XMLTV$Programme.PreviouslyShown = XMLTV$Programme$PreviouslyShown;
  XMLTV$Programme.Premiere = XMLTV$Programme$Premiere;
  XMLTV$Programme.LastChance = XMLTV$Programme$LastChance;
  XMLTV$Programme.Subtitles = XMLTV$Programme$Subtitles;
  XMLTV$Programme.Rating = XMLTV$Programme$Rating;
  XMLTV$Programme.StarRating = XMLTV$Programme$StarRating;
  XMLTV$Programme.Review = XMLTV$Programme$Review;
  XMLTV$Programme.ProgrammeList_init_j9a0lr$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init;
  XMLTV$Programme.ProgrammeList_init_lrtxsc$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_0;
  XMLTV$Programme.ProgrammeList_init_1dvcoh$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_1;
  XMLTV$Programme.ProgrammeList_init_ntr9i2$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_2;
  XMLTV$Programme.ProgrammeList = XMLTV$Programme$ProgrammeList;
  XMLTV.Programme = XMLTV$Programme;
  Object.defineProperty(XMLTV, 'Companion', {
    get: XMLTV$Companion_getInstance
  });
  package$hknbp_core.XMLTV = XMLTV;
  jQuery = $;
  userLanguageList = SettingWindow_getInstance().getLanguageSetting();
  main([]);
  Kotlin.defineModule('HKNBP_Core', _);
  return _;
}(typeof HKNBP_Core === 'undefined' ? {} : HKNBP_Core, kotlin);

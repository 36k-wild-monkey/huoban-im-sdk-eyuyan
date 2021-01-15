l.validFileTypes = ["image", "audio", "video", "file"],
l.validFileExts = {
    image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
    audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
    video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
},

, a = {
  Undefined: 0,
  Single: 1,
  Group: 2,
  PrivateSingle: 3,
  PrivateGroup: 4
}
// ----------------------------------------------------------------


var r = {
    Undifined: 0,
    Win: 1,
    Mac: 2,
    Web: 3
}
  , o = {
    PC: 0,
    Android: 1,
    iOS: 2
}
  , i = {
    Undefined: 0,
    System: 1,
    Normal: 2
}
  , a = {
    Undefined: 0,
    Single: 1,
    Group: 2,
    PrivateSingle: 3,
    PrivateGroup: 4
}
  , s = {
    Undifined: 0,
    Image: 1,
    Voice: 2,
    File: 3
}
  , u = {
    Uploading: "loading",
    Success: "success",
    Failed: "error"
}
  , c = {
    NotExists: 0,
    Uploading: 1,
    UploadCompletion: 2,
    FileBroken: 3
}
  , l = {
    Undefined: 0,
    SentRequest: 1,
    NotAccepted: 2,
    Friend: 3
}
  , p = {
    Send: 0,
    IsFriend: 1,
    AddSuccess: 2
}
  , d = {
    Undefined: 0,
    GroupChat: 1,
    Qrcode: 2,
    PersonalCard: 3,
    Company: 4,
    Other: 5
}
  , f = {
    NormalUser: 0,
    SystemAccount: 1,
    ServiceAccount: 2,
    GroupRobot: 3
}
  , h = {
    Undefined: 0,
    Male: 1,
    Female: 2
}
  , m = {
    Undefined: 0,
    General: 1,
    Company: 2,
    Department: 3,
    Live: 4
}
  , y = {
    Create: 0,
    Invite: 1,
    DeleteMember: 2,
    AddAdministers: 3,
    DeleteAdministers: 4,
    AddWhiteList: 5,
    DeleteWhiteList: 6,
    AddBlackList: 7,
    DeleteBlackList: 8,
    SelectGroupMembers: 9,
    ShowWhiteListDialog: 10,
    ShowBlackListDialog: 11,
    ChangeGroupOwner: 12,
    SelectLecturer: 13,
    SelectAssistants: 14
}
  , g = {
    Template: 1,
    AddSetting: 2,
    Edit: 3
}
  , v = {
    Undefined: 0,
    Custom: 1,
    PushMessage: 2,
    HbOffice: 3
}
  , b = {
    Normal: 0,
    Robot: 1
}
  , S = {
    None: 0,
    Row: 1,
    All: 2
}
  , w = {
    Create: 0,
    Update: 1,
    Detail: 2
}
  , k = {
    Personal: 1,
    GroupNormal: 2,
    GroupRandom: 3
}
  , O = {
    UnCheck: 0,
    Checked: 1,
    Locked: 3,
    Delete: 4
}
  , I = {
    Normal: 0,
    Important: 1,
    Emergency: 2
}
  , T = {
    Offline: 0,
    MobileOnline: 1,
    PCLeave: 2,
    PCOnline: 3,
    External: 4
}
  , _ = {
    None: 0,
    Waiting: 1,
    Reject: 2,
    Cancel: 3,
    Accept: 4,
    Success: 5,
    Pause: 6,
    Failure: 7
}
  , C = {
    Initialize: 0,
    Detail: 1,
    Fill: 2
}
  , x = {
    All: 0,
    Create: 1,
    Update: 2,
    Delete: 3,
    Move: 3
}
  , R = {
    None: 0,
    Manual: 1,
    ASC: 2,
    DESC: 3,
    CreateTimestampASC: 4,
    CreateTimestampDESC: 5,
    UpdateTimestampASC: 6,
    UpdateTimestampDESC: 7,
    Option: 8
}
  , E = {
    None: 0,
    Manual: 1,
    Initial: 2,
    SameValue: 3,
    Option: 4
}
  , M = {
    None: 0,
    Text: 1,
    Number: 2,
    Date: 3,
    Option: 4,
    GroupAlias: 5
}
  , P = {
    None: 0,
    Any: 1,
    Templet: 2,
    Close: 3
}
  , A = {
    Normal: 0,
    Voice: 1,
    Special: 2
}
  , N = {
    Normal: 0,
    Important: 1,
    Emergency: 2
}
  , j = {
    Undefined: 0,
    OnDuty: 1,
    Meeting: 2,
    Assemble: 3,
    Eat: 4,
    OffDuty: 5
}
  , B = {
    [j.OnDuty]: "\u4e0a\u73ed\u5566",
    [j.Meeting]: "\u5f00\u4f1a\u5566",
    [j.Assemble]: "\u96c6\u5408\u5566",
    [j.Eat]: "\u5403\u996d\u5566",
    [j.OffDuty]: "\u4e0b\u73ed\u5566"
}
  , L = {
    Enter: 1,
    EnterCtrl: 2
}
  , D = {
    Success: 0,
    Sending: 1,
    Failed: 2
}
  , U = {
    NotBegin: 0,
    Downloading: 1,
    Success: 2
}
  , F = {
    WaitingForUpdate: 1,
    Updating: 2,
    Success: 3,
    Error: 4
}
  , H = {
    TaskTypeNone: 0,
    TaskTypeTask: 1,
    TaskTypeGroup: 2
}
  , V = {
    TabTypeUndefined: 0,
    TabTypeApp: 1,
    TabTypeLink: 2,
    TabTypeHbOffice: 3
}
  , G = {
    Browser: 1,
    Side: 2
}
  , q = {
    Success: 1,
    Error: 2
}
  , W = {
    NewFriend: 1,
    Friend: 2,
    Group: 3,
    Company: 4,
    Service: 5
}
  , z = 350
  , J = 200
  , Y = {
    Undefined: 0,
    ByInvitation: 1,
    ByQRCode: 2,
    ByWechatShareUrl: 3
}
  , K = {
    Undefined: 0,
    Website: 1,
    AppScheme: 2,
    Complaint: 3
}
  , $ = {
    Suspend: 0,
    Submitted: 1,
    Restore: 2,
    Reject: 3,
    StopUsing: 4
}
  , X = {
    Video: 0,
    Live: 1
}
  , Q = {
    Undefined: 0,
    VoiceAndText: 1,
    PPT: 2,
    Video: 3,
    DesktopShare: 4
}
  , Z = {
    NotStarted: 0,
    Live: 1,
    End: 2
}
  , ee = {
    Undefined: 0,
    WeChat: 1,
    Ali: 2
}
  , te = {
    Student: 0,
    Lecturer: 1,
    Assistant: 2
}
  , ne = {
    All: 0,
    Lecture: 1,
    Question: 2
}
  , re = {
    Push: 1,
    Pull: 2,
    Playback: 3
}
  , oe = {
    Undefined: 0,
    Deduct: 1,
    Discount: 2,
    AllDeduct: 3
}
  , ie = {
    None: 0,
    Apply: 1,
    Success: 2,
    Failure: 3
}
  , ae = {
    Camera: 1,
    Abnormal: 2
}
  , se = {
    None: 0,
    IllegalContent: 1,
    Cheat: 2,
    AccountTheft: 3,
    Tort: 4,
    SendShamInfo: 5,
    PretendToBeOther: 6,
    Gambling: 7,
    SpreadingRumors: 8
};
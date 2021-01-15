
var CLProto = v8core.CLProto;

function __create_im_message(e) {
    var t = e.body
      , n = t.bodyType
      , r = t.data
      , o = CLProto[n]
      , i = o.encode(o.create(r)).finish()
      , a = CLProto.CommonMessage
      , s = CLProto.CommonMessageBaseInfo
      , u = CLProto.CommonMessageBody
      , c = u.create({
        bodyType: n,
        data: i
    })
      , l = s.create(e.baseInfo)
      , p = a.create({
        baseInfo: l,
        body: c
    });
    return p
}

// json -> base64
function encode_im_message(body) {
    var message_body = __create_im_message(body);
    var message_data = CLProto.CommonMessage.encode(message_body).finish();
    return v8core.Base64.encode(message_data);
}

// base64 > json
function decode_im_message(base64_data) {
    var bytes = new Uint8Array(v8core.Base64.decode(base64_data));
    var message_body = CLProto.CommonMessage.decode(bytes);
    message_body.body.data = CLProto[message_body.body.bodyType].decode(message_body.body.data);
    if(message_body && message_body.body && message_body.body.bodyType === 'SocketBodyBatchOfflineMessages') {
        if(message_body.body.data && message_body.body.data.messages) {
            var messages = message_body.body.data.messages;
            for(var i=0; i<messages.length; i++) {
                messages[i].body.data = CLProto[messages[i].body.bodyType].decode(messages[i].body.data);
                
            }
            message_body.body.data.messages = messages;
            message_body.body.data = CLProto[message_body.body.bodyType].toObject(message_body.body.data);
        }
    }
    message_body = CLProto.CommonMessage.toObject(message_body);
    return message_body;
}


function __create_http_message(userId, token, deviceType, body) {
    var session = {
        deviceType: deviceType
    }
    if(userId) {
        session.userId = userId;
    }
    if(token) {
        session.token = token;
    }
    var n = body
    , r = n.bodyType
    , o = n.body
    , a = CLProto["HttpRequest"]
    , s = CLProto["HttpRequestSession"]
    , c = CLProto["HttpBody"]
    , p = s.create(session)
    , f = CLProto[r]
    , m = f.encode(f.create(o)).finish()
    , y = c.create({
        bodyType: r,
        data: m
    })
    , g = a.create({
        session: p,
        body: y
    })
    , v = a.encode(g).finish();
    return v;
}

// json -> base64
function encode_http_message(userId, token, deviceType, body) {
    var message_data = __create_http_message(userId, token, deviceType, body);
    return v8core.Base64.encode(message_data);
}

// base64 -> json
function decode_http_message(base64_data) {
    var bytes = new Uint8Array(v8core.Base64.decode(base64_data));
    var message_body = CLProto.HttpResponse.decode(bytes);
    message_body.body.data = CLProto[message_body.body.bodyType].decode(message_body.body.data);
    message_body = CLProto.HttpResponse.toObject(message_body);
    return message_body;
}

// 响应：HttpResponseBodyGetIMServerConfig
function http_get_server_config(userId, token, deviceType) {
    var body = {
        bodyType: "HttpRequestBodyGetIMServerConfig",
        body: {}
    };
    return encode_http_message(userId, token, deviceType, body);
}

// 响应：HttpResponseBodyGetUserInfo
function http_get_user_info(userId, token, deviceType, get_user_id) {
    var body = {
        bodyType: "HttpRequestBodyGetUserInfo",
        body: {
            userId: get_user_id
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

// 响应：HttpResponseBodyGetFriendsInfo
function http_get_friends_info(userId, token, deviceType, get_user_ids) {
    var body = {
        bodyType: "HttpRequestBodyGetFriendsInfo",
        body: {
            userIds: get_user_ids.split(',')
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyGetMyFriends
function http_get_friends(userId, token, deviceType) {
    var body = {
        bodyType: "HttpRequestBodyGetMyFriends",
        body: {}
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyGetMyGroupIds
function http_get_groups(userId, token, deviceType) {
    var body = {
        bodyType: "HttpRequestBodyGetMyGroupIds",
        body: {}
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseGetConversationSequence
function http_get_conversation_sequence(userId, token, deviceType, type, conversationId) {
    var body = {
        bodyType: "HttpRequestGetConversationSequence",
        body: {
            area: 0,
            conversationId: conversationId,
            conversationType: type, // 1 单聊 2 群组
            userId: userId,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyGetConversationHistory
function http_get_conversation_history(userId, token, deviceType, type, conversationId, count, sequence_low, sequence_high) {
    var body = {
        bodyType: "HttpRequestBodyGetConversationHistory",
        body: {
            area: 0,
            conversationId: conversationId,
            conversationType: type, // 1 单聊 2 群组
            count: count,
            downDirection: false,
            fixUrl: true,
            sequence: new v8core.Long(sequence_low, sequence_high, true),
            userId: userId,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodySetConversationReadStatus
function http_set_conversation_read_status(userId, token, deviceType, type, conversationId, sequence_low, sequence_high) {
    var body = {
        bodyType: "HttpRequestBodySetConversationReadStatus",
        body: {
            conversationId: conversationId,
            conversationType: type, // 1 单聊 2 群组
            sequence: new v8core.Long(sequence_low, sequence_high, true),
            userId: userId,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodySubscribeUserOnlineStatus
function http_subscribe_user_online_status(userId, token, deviceType, type, conversationId) {
    var body = {
        bodyType: "HttpRequestBodySubscribeUserOnlineStatus",
        body: {
            conversationId: conversationId,
            conversationType: type, // 1 单聊 2 群组
            deviceType: deviceType,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}


//  响应：HttpResponseBodyBatchSetMessagesUnreadStatus
function http_batch_set_message_unread_status(userId, token, deviceType, type, conversationId, messageIds) {
    var body = {
        bodyType: "HttpRequestBodyBatchSetMessagesUnreadStatus",
        body: {
            items:[
                {
                    conversationId: conversationId,
                    conversationType: type, // 1 单聊 2 群组
                    messageIds: messageIds.split(','),
                }

            ]
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodySyncUnreadNumber
function http_sync_unread_number(userId, token, deviceType, number) {
    var body = {
        bodyType: "HttpRequestBodySyncUnreadNumber",
        body: {
            number: number
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyRemoveConversation
function http_remove_conversation(userId, token, deviceType, type, conversationId) {
    var body = {
        bodyType: "HttpRequestBodyRemoveConversation",
        body: {
            conversationId: conversationId,
            conversationType: type, // 1 单聊 2 群组
            userId:userId,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

// 响应：HttpResponseBodyGetLatestFriendRequestStatus
function http_get_friends_status(userId, token, deviceType) {
    var body = {
        bodyType: "HttpRequestBodyGetLatestFriendRequestStatus",
        body: {}
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyUploadFileBlock
function http_upload_files(userId, token, deviceType, fileType, extensionFileName, fileData, md5) {
    var data = new Uint8Array(v8core.Base64.decode(fileData));
    var body = {
        bodyType: "HttpRequestBodyUploadFileBlock",
        body: {
            data: data,
            size: data.length,
            extensionFileName: extensionFileName,
            fileType: fileType,
            isOriginalImage: true,
            md5: md5,
            uploadOffset: 0,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyGetFileInfo
function http_get_file_info(userId, token, deviceType, fileType, extensionFileName, filename, fileSize, md5) {
    var body = {
        bodyType: "HttpRequestBodyGetFileInfo",
        body: {
            extensionFileName: extensionFileName,
            fileName: filename,
            fileType: fileType,
            isOriginalImage: true,
            md5: md5,
            size: fileSize,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyLogin
function http_login(phoneNumber, password, deviceType, deviceId) {
    var body = {
        bodyType: "HttpRequestBodyLogin",
        body: {
            phoneNumber: phoneNumber,
            passwordHash: password,
            deviceId: deviceId,
            deviceType: deviceType,
            pcLoginType: 3
        }
    };
    return encode_http_message(null, null, deviceType, body);
}

//  响应：HttpResponseBodyGetGroupsAllInfo
function http_get_group_info(userId, token, deviceType, groupIds) {
    var body = {
        bodyType: "HttpRequestBodyGetGroupsAllInfo",
        body: {
            groupIds: groupIds.split(',')
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyCreateGroup
function http_create_group(userId, token, deviceType, userIds) {
    var body = {
        bodyType: "HttpRequestBodyCreateGroup",
        body: {
            userIds: userIds.split(',')
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyRemoveFriend
function http_delete_friend(userId, token, deviceType, userId) {
    var body = {
        bodyType: "HttpRequestBodyRemoveFriend",
        body: {
            userId: userId
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodySendFriendRequest
function http_add_friend(userId, token, deviceType, userId) {
    var body = {
        bodyType: "HttpRequestBodySendFriendRequest",
        body: {
            addFriendSource: 5,
            requestMessage: "",
            userId: userId
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyGetGroupMembers
function http_get_group_members(userId, token, deviceType, groupId) {
    var body = {
        bodyType: "HttpRequestBodyGetGroupMembers",
        body: {
            groupId:groupId
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyAddGroupMembers
function http_add_group_members(userId, token, deviceType, groupId, memberIds) {
    var body = {
        bodyType: "ttpRequestBodyAddGroupMembers",
        body: {
            departments: [],
            groupId: groupId,
            memberIds: memberIds.split(','),
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodyDeleteGroupMembers
function http_delete_group_members(userId, token, deviceType, groupId, memberIds) {
    var body = {
        bodyType: "HttpRequestBodyDeleteGroupMembers",
        body: {
            departments: [],
            groupId: groupId,
            memberIds: memberIds.split(','),
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodySetGroupName
function http_set_group_name(userId, token, deviceType, groupId, newName) {
    var body = {
        bodyType: "HttpRequestBodySetGroupName",
        body: {
            departments: [],
            groupId: groupId,
            groupName: newName,
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}

//  响应：HttpResponseBodySetGroupInvitationVerification
function http_set_group_verify(userId, token, deviceType, groupId, verify) {
    var body = {
        bodyType: "HttpRequestBodySetGroupInvitationVerification",
        body: {
            groupId: groupId,
            invitationVerification: verify
        }
    };
    return encode_http_message(userId, token, deviceType, body);
}


// 响应：SocketResponseCodeSuccess
function im_login(userId, token, deviceType) {
    try {
        var data = {
            "userId": userId,
            "token": token,
            "deviceType": deviceType,
            "batchAck": {"batchMessageAcks":[]},
            "config": {
                "external":true,
                "appVersion":"3.4.3"
            }
        }
        var body = {
            baseInfo: {},
            body: {
                bodyType: 'SocketBodyLoginRequest',
                data: data
            }
        };
        var message_data = encode_im_message(body);
        return message_data;
    }catch(err) {
        return '';
    }
}

// 响应：SocketBodyOfflineMessagesFinish
function im_offline_message_begin() {
    try {

        var body = {
            baseInfo: {},
            body: {
                bodyType: 'SocketBodyOfflineMessagesBegin',
                data: {}
            }
        };
        var message_data = encode_im_message(body);
        return message_data;
    }catch(err) {
        return '';
    }
}

// 响应：SocketBodyOfflineMessagesFinish
function im_offline_message_ack(batchMessageAcks) {
    try {
        for(var i=0; i<batchMessageAcks.length; i++) {
            try {
                if(!batchMessageAcks[i].sequence) {
                    batchMessageAcks[i].sequence = new v8core.Long(batchMessageAcks[i].sequence_low, batchMessageAcks[i].sequence_high, true)
                    delete batchMessageAcks[i].sequence_low;
                    delete batchMessageAcks[i].sequence_high;
                }
                
            }catch(err) {

            }
        }
        var body = {
            baseInfo: {},
            body: {
                bodyType: 'SocketBodyBatchOfflineMessageAcks',
                data: {
                    batchMessageAcks: batchMessageAcks
                }
            }
        };
        var message_data = encode_im_message(body);
        return message_data;
    }catch(err) {
        return '';
    }
}

// 响应：SocketBodyACK
function im_send_text(conversationType, from, to, text, atUsers='', atAll=false, messageId=null) {
    try {
        var baseInfo = {
            "from": { "chatId": from },
            "to": { "chatId": to },
            "basicType": 2,
            "sequence": 0,
            "conversationType": conversationType,
            "unread": 1,
            "messageId": messageId? messageId: v8core.UUID.uuid(),
            "timestamp": +new Date,
            "area": 0,
            "conversationId": to,
            "additional": null
        };
    
        var data = {
            "text": text,
            "area": 0,
            "messageId": messageId? messageId: v8core.UUID.uuid(),
            "atUsers": atUsers.split(','),
            "atUserInfos": [],
            "atAll": atAll,
            "url": ""
        }

        var body = {
            baseInfo: baseInfo,
            body: {
                bodyType: 'SocketBodyText',
                data: data
            }
        };
        var message_data = encode_im_message(body);
        return message_data;
    }catch(err) {
        return ''
    }
}

// 响应：SocketBodyACK
function im_send_image(conversationType, from, to, data, messageId) {
    try {
        var baseInfo = {
            "from": { "chatId": from },
            "to": { "chatId": to },
            "basicType": 2,
            "sequence": 0,
            "conversationType": conversationType,
            "unread": 1,
            "messageId": messageId? messageId: v8core.UUID.uuid(),
            "timestamp": +new Date,
            "area": 0,
            "conversationId": to,
            "additional": null
        };
    
        var body = {
            baseInfo: baseInfo,
            body: {
                bodyType: 'SocketBodyImage',
                data: data
            }
        };
        var message_data = encode_im_message(body);
        return message_data;
    }catch(err) {
        return ''
    }
}
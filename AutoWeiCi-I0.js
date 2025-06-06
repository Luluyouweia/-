console.log("[系统]AutoWeiCi_I0启动成功\n使用方法注意：本程序需要在无障碍模式下运行，请在即将弹出的设置界面中启动AutoWeiCi_I0的无障碍服务。若未弹出，请自行启动。之后打开需要完成的打卡任务，并点击进入第一个卡即可开始自动化打卡。\n\n还有3秒启动维词。")

auto.waitFor();
var appName = "维词"; //鹿鹿悠为2025-6-6
//console.log("[系统]AutoWeiCi_I0启动成功\n使用方法注意：本程序需要在无障碍模式下运行，请在即将弹出的设置界面中启动AutoWeiCi_I0的无障碍服务。若未弹出，请自行启动。之后打开需要完成的打卡任务，并点击进入第一个卡即可开始自动化打卡。\n\n还有9秒启动维词。")
sleep(3000);
launchApp(appName);
console.log("[正常]维词启动成功")
toast("请在16秒内进入打卡界面，16秒后将自动开始打卡。")
toast("请在16秒内进入打卡界面！，16秒后将自动开始打卡。")
sleep(16000)

var data = []
var pasts = [0]
let totalCount = 0;
let isChecked = false;

function containsSubstring(a, b) {
    // 遍历数组中的每个字符串
    for (var i = 0; i < a.length; i++) {
        var currentString = a[i];
        // 使用 indexOf 检查 b 是否是 currentString 的子串
        if (currentString.indexOf(b) !== -1) {
            return true; // 找到匹配项，立即返回 true
        }
    }
    return false; // 遍历完成未找到匹配项
}
scrollToBottom();

function scrollToBottom() {
    click("未提交")
    console.log("尝试点击“未提交”")
    sleep(1500)
    var words = [];
    var tss = []
  
    console.log("[正常]已完成初始化，开始打卡。", words)
    taskMode(0, words, tss)
}

function taskMode(para, words, tss) {

    if (para == 2) para = 0
    if (isChecked == false) {
        click("查看解析")
        sleep(300)
    }
    if (id("recycleView").exists() && isChecked == false) {
        console.log("[正常]查看解析中...")
         words = [];
         tss = [];
        isChecked = true;
        for (let i = 0; i < 64; ++i) {
            try {
                id("recycleView").findOne().children().forEach(child => {
                    var target = child.findOne(id("question_tv"));
                    if (target) {
                        if (words.indexOf(target.text()) == -1) {
                            words.push(target.text());
                            tss.push(child.findOne(id("answer")).text().split("答案：")[1]);
                        }

                    }
                })

                scrollDown()
            } catch (err) {
                scrollDown();
            }

        }
        sleep(1000)
        for (let i = 0; i < 64; ++i) {
            try {
                id("recycleView").findOne().children().forEach(child => {
                    var target = child.findOne(id("question_tv"));
                    if (target) {
                        if (words.indexOf(target.text()) == -1) {
                            words.push(target.text());
                            tss.push(child.findOne(id("answer")).text().split("答案：")[1]);
                        }

                    }
                })

                scrollUp()
            } catch (err) {
                scrollUp();
            }



        }
        isChecked = false;
        sleep(1000)
        console.log("[正常]已记忆的内容：", words, tss)

        id("title_bar_left_back").findOne().click()

        sleep(600)

        click("继续订正")
        click("去订正")
        sleep(1000)

    }


    let pageIndex = [0, 1]
    let s = pageIndex[para]
    try {
        if (id("answer_list").find()) {

            if (id("answer_list").find().get(s)) {

                const obj = id("answer_list").find().get(s);

                if (tss.indexOf(obj.child(0).text()) != -1) {
                    //tss[tss.indexOf(obj.child(0).text())]=null;
                    obj.child(0).click();
                } else if (tss.indexOf(obj.child(1).text()) != -1) {
                    //tss[tss.indexOf(obj.child(1).text())]=null
                    obj.child(1).click();
                } else {
                    obj.child(2).click();
                }



                taskMode(para + 1, words, tss);
            } else {
                console.log("[ERROR]cannot find correct answer_list .")
            }
        }
    } catch (err) {

        taskMode(para + 1, words, tss)
    }
}
/*)
    }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/*  }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/**)
    }
}*/
/*}*//**//**)
    }
}*/
/*}*//**//*}
}*/
/**)
    }
}*/
/*}*//**//**)
    }
}*/
/*}*//**//*wer_list .")
            }
        }
    } catch (err) {

        taskMode(para + 1, words, tss)
    }
}
/*)
    }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/*  }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/**)
    }
}*/
/*}*//**/*/());
                            tss.push(child.findOne(id("answer")).text().split("答案：")[1]);
                        }

                    }
                })

                scrollDown()
            } catch (err) {
                scrollDown();
            }

        }
        sleep(1000)
        for (let i = 0; i < 64; ++i) {
            try {
                id("recycleView").findOne().children().forEach(child => {
                    var target = child.findOne(id("question_tv"));
                    if (target) {
                        if (words.indexOf(target.text()) == -1) {
                            words.push(target.text());
                            tss.push(child.findOne(id("answer")).text().split("答案：")[1]);
                        }

                    }
                })

                scrollUp()
            } catch (err) {
                scrollUp();
            }



        }
        isChecked = false;
        sleep(1000)
        console.log("[正常]已记忆的内容：", words, tss)

        id("title_bar_left_back").findOne().click()

        sleep(600)

        click("继续订正")
        click("去订正")
        sleep(1000)

    }


    let pageIndex = [0, 1]
    let s = pageIndex[para]
    try {
        if (id("answer_list").find()) {

            if (id("answer_list").find().get(s)) {

                const obj = id("answer_list").find().get(s);

                if (tss.indexOf(obj.child(0).text()) != -1) {
                    //tss[tss.indexOf(obj.child(0).text())]=null;
                    obj.child(0).click();
                } else if (tss.indexOf(obj.child(1).text()) != -1) {
                    //tss[tss.indexOf(obj.child(1).text())]=null
                    obj.child(1).click();
                } else {
                    obj.child(2).click();
                }



                taskMode(para + 1, words, tss);
            } else {
                console.log("[ERROR]cannot find correct answer_list .")
            }
        }
    } catch (err) {

        taskMode(para + 1, words, tss)
    }
}
/*)
    }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/*  }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/**)
    }
}*/
/*}*//**//**)
    }
}*/
/*}*//**//*}
}*/
/**)
    }
}*/
/*}*//**//**)
    }
}*/
/*}*//**//*wer_list .")
            }
        }
    } catch (err) {

        taskMode(para + 1, words, tss)
    }
}
/*)
    }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/*  }
}*/
/*e(para + 1, words, tss)
    }
}/*)
    }
}*/
/**)
    }
}*/
/*}*//**/
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"1ah5":function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("oX1x"),i=t("Q/5i"),o=function QuizGradeDisclaimer(e){var t=e.courseSlug;if(t)return n.a.createElement(r.a,{courseSlug:t},function(e){var t=e.notifications;if(null==t?void 0:t.some(function(e){return"gradeDisclaimerMessage"===e.typeName}))return n.a.createElement(i.a,null);return null});return null};e.a=o},"9wTT":function(module,exports,e){var t=e("iYw9"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},FkXZ:function(module,exports,e){var t=e("KSQU"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},KSQU:function(module,exports,e){},USJv:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaChart(e){var t=e.title,n=void 0===t?"Chart":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 41 37"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"#F26C75",d:"M5 32h32V0H5z"}),a.createElement("path",{stroke:"#424242",strokeWidth:"2",d:"M8 28l9.263-12.572 10.105 8.98L40 6"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",d:"M1 0v36h40"})))};(o=Object(r.pure)(o)).displayName="SvgaChart",e.a=o},Vh8P:function(module,e,t){"use strict";var a=t("UB5X"),n=t.n(a),r=t("sbe7"),i=t.n(r),o=t("EqTq"),s=t("AWZ4"),l=t("m10x"),c=t("CsdX"),u=t("CfbJ"),m=t("d3Ej"),d=t.n(m),p=t("vRSd"),f=t("kvW3"),v=t("lEg3"),g=t("RSmF"),b=t("9wTT"),E=t.n(b),h=Object(o.a)("CoverPageRowRightSideActions"),y=function renderActionButton(e,t){return i.a.createElement(s.b,{size:"sm",type:"primary",label:e,onClick:t,htmlAttributes:{"aria-label":d()("#{action} quiz",{action:e})}})},S=function CoverPageRowRightSideActions(e){var t=e.startAttempt,a=e.restartAttempt,r=e.resumeAttempt,o=e.retryAttempt,m=e.submissionTime,b=e.showTimer,E=e.timeLimit,S=e.timerId,j=e.attemptsLeft,L=e.secondsLeftInLatestAttempt,O=e.attemptLimitTimeLeft,C=null,P=n()(O)||"number"==typeof j&&0===j;return t?C=y(d()("Start"),t):a?C=y(d()("Restart"),a):r?C=y(d()("Resume"),r):o&&(C=i.a.createElement(s.b,{size:"sm",type:"link",label:d()("Try again"),onClick:o,disabled:P})),i.a.createElement("div",{className:h()},i.a.createElement("div",{className:h("action-button",{linkStyle:!!o})},C),P&&n()(O)&&i.a.createElement("div",{className:h("retry-info")},i.a.createElement(l.a,null,i.a.createElement(f.b,{message:d()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:i.a.createElement("strong",null,Object(v.c)(O))}))),m&&i.a.createElement("div",{className:h("submission-time")},i.a.createElement(l.a,null,i.a.createElement(l.h,{tag:"span"},d()("Submitted"))," ",i.a.createElement("span",{className:h("submission-time-detail")},p.a.getFormattedDeadline(m)))),n()(E)&&t&&i.a.createElement("div",{className:h("time-limit")},i.a.createElement(l.a,null,i.a.createElement(u.a,{size:20,color:c.b.primary}),i.a.createElement("span",{className:h("time-limit-text")},i.a.createElement(f.b,{message:d()("You will have {timeLimit} to finish"),timeLimit:Object(v.c)(E,!0)})))),b&&n()(L)&&i.a.createElement(g.a,{timerId:S,remainingTimeInMs:1e3*L,displayRemaining:!0}))};e.a=S},XSZB:function(module,exports,e){var t=e("jcll"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},fHLu:function(module,e,t){"use strict";t.d(e,"a",function(){return r});var a=t("S0QZ"),n=function clearQuizApolloCache(e){Object(a.a)(e.cache,["RestQuizSessionMetadataElement","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState","$ROOT_QUERY.ChangedResponse"])},r=function clearPracticeQuizApolloCache(e){Object(a.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=n},iYw9:function(module,exports,e){},jcll:function(module,exports,e){},oX1x:function(module,e,t){"use strict";var a=t("VkAN"),n=t.n(a),r=t("sbe7"),i=t.n(r),o=t("sQ/U"),s=t("PDuk"),l=t.n(s),c=t("lTCR"),u=t.n(c),m=t("oJmH"),d=t.n(m),p=t("BH3y");function _templateObject(){var e=n()(["\n  query CourseMessagesQuery($id: String!) {\n    CourseMessagesV1 @naptime {\n      findCourseMessages(id: $id) {\n        elements {\n          id\n          messages\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var f=u()(_templateObject()),v=function CourseMessagesProvider(e){var t=e.courseSlug,a=e.children,n=o.a.get().id,r=Object(s.tupleToStringKey)([Object(s.tupleToStringKey)([n,t]),p.a.COURSE_GRADES,-1]);return i.a.createElement(m.Query,{query:f,variables:{id:r}},function(e){var t,n,r,i=e.loading,o=e.data,s=e.refetch,l=null==o?void 0:null===(t=o.CourseMessagesV1)||void 0===t?void 0:null===(n=t.findCourseMessages)||void 0===n?void 0:null===(r=n.elements)||void 0===r?void 0:r[0].messages;return a({loading:i,notifications:l,refetch:s})})};e.a=v},pRpZ:function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("EqTq"),i=t("w+/x"),o=t("USJv"),s=t("m10x"),l=t("kvW3"),c=t("d3Ej"),u=t.n(c),m=t("FkXZ"),d=t.n(m),p=Object(r.a)("CoverPageNudges"),f=function LikelihoodNudge(e){var t=e.value,a=Math.ceil(t/100);return n.a.createElement("div",{className:p()},n.a.createElement("div",{className:p("svg-icon")},n.a.createElement(o.a,{size:48})),n.a.createElement("div",{className:p("message")},n.a.createElement(s.j,null,u()("Get closer to your goal")),n.a.createElement(l.b,{message:u()("You are {value} more likely to complete the course if you finish the assignment"),value:n.a.createElement("strong",null,a>1?a+u()(" times"):t+"%"),tagName:"p",rootClassName:p("info")})))},v=function SocialNudge(e){var t=e.value;return n.a.createElement("div",{className:p()},n.a.createElement("div",{className:p("svg-icon")},n.a.createElement(i.a,{size:48}),","),n.a.createElement("div",{className:p("message")},n.a.createElement(s.j,null,u()("People are making progress")),n.a.createElement(l.b,{message:u()("{numOfLearners} learners have recently completed this assignment"),numOfLearners:n.a.createElement("strong",null,t),tagName:"p",rootClassName:p("info")})))},g=function CoverPageNudges(e){var t=e.nudge,a=t.nudgeType,r=t.nudgeNumber;switch(a){case"social":return n.a.createElement(v,{value:r});case"likelihood":return n.a.createElement(f,{value:r});default:return null}};e.a=g},"w+/x":function(module,e,t){"use strict";var a=t("sbe7"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaPen(e){var t=e.title,n=void 0===t?"Pen":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 36 44"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M36 25.855C36 35.845 20.836 44 10.895 44S0 35.846 0 25.855C0 15.865 13.185 8 23.127 8 33.067 8 36 15.864 36 25.855",fill:"#F3C800"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M21.907 4.781l6.751 12.248-10.823 17.146L7.253 17.181l6.999-12.452M8.428 4.081h19.359V1H8.427zM17.954 33.074V21.186"}),a.createElement("path",{d:"M15.23 18.272a2.723 2.723 0 1 1 5.447 0 2.723 2.723 0 0 1-5.446 0z",stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))};(o=Object(r.pure)(o)).displayName="SvgaPen",e.a=o},wrIk:function(module,e,t){"use strict";t.r(e),t.d(e,"QuizCoverPage",function(){return D});var a=t("MVZn"),n=t.n(a),r=t("VbXa"),i=t.n(r),o=t("sbe7"),s=t.n(o),l=t("oJmH"),c=t.n(l),u=t("sBWo"),m=t("fHLu"),d=t("NKt0"),p=t("ZK4H"),f=t("pRpZ"),v=t("TO9F"),g=t("scbn"),b=t("qJwm"),E=t("+LJP"),h=t("MqGB"),y=t("nlef"),S=t("Vh8P"),j=t("eXDi"),L=t("1ah5"),O=t("zaiP"),C=t("LHEl"),P=t("kYu0"),k=t("VtNW"),w=t.n(k),A=t("VMeS"),N=t("8ec0"),T=t("xXQ2"),R=t("KvdX"),I=t("TOZ3"),x=t("EqTq"),z=t("XSZB"),M=t.n(z),Q=Object(x.a)("QuizCoverPage"),D=function(e){function QuizCoverPage(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).getRestartAttemptFunction=function(e,a,r){return function(){if(a&&r){if(r.isLastAttemptBeforeLock||1===r.attemptsLeft)return void a({type:R.a.lastAttemptModal,props:n()({},r,{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})});if("number"==typeof r.timeLimit)return void a({type:R.a.timedAttemptStart,props:n()({},r,{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})})}var i=t.props.openAttemptPage;Object(m.b)(e),i()}},t}var t;return i()(QuizCoverPage,e),QuizCoverPage.prototype.render=function render(){var e=this,t=this.props,a=t.children,n=t.openSubmittedAttemptPage;return s.a.createElement(O.a,null,function(t){var r=t.item;if(!r||!r.contentSummary)return s.a.createElement(A.a,null);return s.a.createElement(C.a,{courseId:r.courseId,itemId:r.id},function(t){var i=t.loading,o=t.lastSessionId,c=t.lockingConfigurationSummary,u=t.unsubmittedSessionId,E=t.bestEvaluation,O=t.nudge,C=t.refetch;if(!r||!r.contentSummary||i)return s.a.createElement(A.a,null);if("exam"===r.contentSummary.typeName){var k=r.contentSummary.definition,x=r.isCumulativeGraded;return s.a.createElement(v.a,null,s.a.createElement(I.b,{justifyContent:"between",rootClassName:Q("header-container")},s.a.createElement(d.a,{assignmentTypeName:w()("Quiz"),item:r,subHeader:s.a.createElement(p.a,{courseId:null==r?void 0:r.courseId,itemId:null==r?void 0:r.id,courseSlug:null==r?void 0:r.courseSlug,learningObjectiveIds:null==r?void 0:r.learningObjectiveIds})}),O&&s.a.createElement(f.a,{nudge:O})),s.a.createElement("div",{className:Q("notifications")},s.a.createElement(L.a,{courseSlug:null==r?void 0:r.courseSlug})),s.a.createElement(P.a,{standardProctorConfigurationId:k.standardProctorConfigurationId},function(t){var a=t.timeLimit,n=t.secondsLeftInLatestAttempt,i=t.remainingAttempts,l=t.completedAttempts,m=t.client;return s.a.createElement(h.b,{stepTitle:w()("Submit your assignment"),stepDetails:s.a.createElement(y.a,{deadline:r.deadline,attemptsRateCount:(c||{}).allowedSubmissionsPerInterval,attemptsRateInterval:(c||{}).allowedSubmissionsInterval,attemptsLeft:i,attemptsCompleted:l}),rightSideView:s.a.createElement(R.b,null,function(t){var l=t.showModal,d={timeLimit:a,attemptsLeft:i,lockedTimeLeft:Object(T.b)(c),isLastAttemptBeforeLock:Object(T.c)(c),hasAttemptLimit:!!c&&c.allowedSubmissionsPerInterval>0};return s.a.createElement(S.a,{startAttempt:o||u?void 0:e.getRestartAttemptFunction(m,l,d),resumeAttempt:u?e.getRestartAttemptFunction(m):void 0,timeLimit:a,showTimer:!!u,timerId:Object(N.a)(r.id),secondsLeftInLatestAttempt:n,retryAttempt:e.getRestartAttemptFunction(m,l,d),attemptLimitTimeLeft:Object(T.a)(c),attemptsLeft:i})}),statusIconType:o?h.a.check:void 0})}),s.a.createElement(h.b,{stepTitle:w()("Receive grade"),stepDetails:s.a.createElement(y.a,{passingFraction:k.passingFraction,isCumulativeGraded:x}),rightSideView:s.a.createElement(l.ApolloConsumer,null,function(e){return s.a.createElement(j.a,{itemGrade:r.itemGrade,computedScore:(E||{}).score,maxScore:(E||{}).maxScore,isCumulativeGraded:x,viewFeedback:o?function(){Object(m.b)(e),n()}:void 0,isViewFeedbackButtonLinkStyle:!!u})}),statusIconType:Object(h.c)((r.itemGrade||{}).isPassed,x)}),s.a.createElement(h.b,{rightSideView:s.a.createElement(g.a,{computedItem:r,itemFeedbackType:b.n.Quiz})}),a&&C&&s.a.cloneElement(a,{refetchCoverPageData:function refetchCoverPageData(){return C().then(function(){return r.refetch()})}}))}return null})})},QuizCoverPage}(s.a.Component),F=Object(E.a)(function(e){return{openAttemptPage:function openAttemptPage(){e.push({name:"quiz-attempt",params:e.params})},openSubmittedAttemptPage:function openSubmittedAttemptPage(){e.push({name:"quiz-view-attempt",params:e.params})}}})(D);e.default=Object(u.a)(F)}}]);
//# sourceMappingURL=67.942acdb3ca318b5e2aa3.js.map
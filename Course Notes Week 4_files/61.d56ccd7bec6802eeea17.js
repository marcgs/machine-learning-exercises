(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"+m0m":function(module,e,n){"use strict";var t=n("xxrO"),r=n("TV8g");e.a=function(e,n){var a=Object(r.a)(e).then(function(e){return new t.a(e.elements)});return a.done(),a}},CMO8:function(module,e,n){"use strict";var t=n("wiyT"),r=n.n(t),a=n("DnuM"),i=n("sQ/U"),o=n("ONUL"),s=n("2FMX"),u=n("+m0m"),c=Object(a.a)("/api/reports.v1",{type:"rest"}),l="teachVisitedAt",d=10080,f={getBannerData:function getBannerData(){var e=this;return this.getTeachingCourse().spread(function(n,t){return[n,t,e.getLearnerCounts(n,t)]})},getVisitedTimestamp:function getVisitedTimestamp(){return localStorage.teachVisitedAt},setVisitedTimestamp:function setVisitedTimestamp(){localStorage.teachVisitedAt=Date.now()},shouldShow:function shouldShow(){var e=this.getVisitedTimestamp();if(e){var n=new Date(parseInt(e)),t=new Date(Date.now()),r,a,i;return 60*t.getHours()+t.getMinutes()-(60*n.getHours()+n.getMinutes())>10080}return!0},getTeachingCourse:function getTeachingCourse(){var e=i.a.get().id;if(!e)return r.a.reject();return Object(u.a)(e).then(function(e){var n=e.find(function(e){return e.hasTeachingRole()});if(n&&"UNIVERSITY_ADMIN"!==n.get("courseRole")){var t=n.get("courseId");return[n,s.a.fromId(t)]}return r.a.reject()}).spread(function(e,n){return o.a.isLaunched(n)?[e,n]:r.a.reject()})},getLearnerCounts:function getLearnerCounts(e,n){var t=this;return r()(c.get("Course~".concat(n.id,"~activity_learner_counts"))).then(function(a){return t.validateLearnerCountsResponse(a)?a.elements[0].body:r.a.reject({membership:e,course:n})})},validateLearnerCountsResponse:function validateLearnerCountsResponse(e){return e.elements&&e.elements[0]&&e.elements[0].body&&e.elements[0].body.latest&&e.elements[0].body.latest.starter_ever_count&&e.elements[0].body.latest.active_learner_past_1w_count&&e.elements[0].body.latest.visitor_ever_count&&e.elements[0].body["1w_ago"]&&e.elements[0].body["1w_ago"].starter_ever_count},getWeeklyNewLearnerCount:function getWeeklyNewLearnerCount(e){return e.latest.starter_ever_count-e["1w_ago"].starter_ever_count},getWeeklyActiveLearnerCount:function getWeeklyActiveLearnerCount(e){return e.latest.active_learner_past_1w_count},getTotalLearnerCount:function getTotalLearnerCount(e){return e.latest.visitor_ever_count}};e.a=f;var h=f.getBannerData,m=f.getVisitedTimestamp,p=f.setVisitedTimestamp,v=f.shouldShow,C=f.getTeachingCourse,b=f.getLearnerCounts,E=f.validateLearnerCountsResponse,g=f.getWeeklyNewLearnerCount,N=f.getWeeklyActiveLearnerCount,y=f.getTotalLearnerCount},DliG:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),i=n.n(a),o=n("sbe7"),s=n.n(o),u=n("CMO8"),c=n("kvW3"),l=function(e){function TotalLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(TotalLearnerBanner,e),TotalLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getTotalLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-TotalLearnerBanner"},"A total of"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","are enrolled in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n),". View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},TotalLearnerBanner}(s.a.Component);l.propTypes={course:i.a.object.isRequired,learnerCounts:i.a.object.isRequired},e.a=l},EAIP:function(module,exports,e){var n=e("HKWZ"),t;"string"==typeof n&&(n=[[module.i,n,""]]);var r={transform:void 0},a=e("aET+")(n,r);n.locals&&(module.exports=n.locals)},HKWZ:function(module,exports,e){},M6Ur:function(module,e,n){"use strict";n.d(e,"a",function(){return I});var t=n("MVZn"),r=n.n(t),a=n("FyPc"),i=n.n(a),o=n("dMi0"),s=n.n(o),u=n("xHmP"),c=n("2egT"),l=n("jQVW"),d=n("ibP9"),f=n("qXB5"),h=n("2aIb"),m=n.n(h),p=function openNewWindowWithCourseSlug(e){return window.open(Object(c.e)(e),"_blank")},v=function viewContextAsLearner(e,n){var t=n.courseContext,a=n.branch,i=n.courseSlug,o=n.courseId,c=n.skipReloadWindow,f=void 0!==c&&c,h=n.onCompleteChangeUserEnrollment,m=void 0===h?function(){}:h,v=function onComplete(){m(),p(i)},C={courseId:o,selectDefaultSessionForBranch:!0,branch:a,skipReloadWindow:f,userCanSwitchGroups:!0};if(f?C.onCompleteChangeUserEnrollment=v:C.newWindow=p(i),t.typeName===l.a.SESSION_GROUP)C=r()({},C,{sessionId:t.definition.sessionId,groupId:t.definition.groupId,selectDefaultSessionForBranch:!1});else if(t.typeName===l.a.PUBLIC_BRANCH&&(a.branchStatus===d.b.NEW||a.branchStatus===d.b.UPCOMING)){var b=s()(a.associatedSessions,function(e){return e.isPreview})||null;C=r()({},C,{selectDefaultSessionForBranch:!b,sessionId:b})}e.executeAction(u.a,C)},C=function getContextByContextId(e,n){return e.find(function(e){var t=e.definition;return n.startsWith("group~")?t.groupId===n.split("group~")[1]:t.authoringCourseBranchId===n})},b=function hasCreatingBranch(e){return!!e.find(function(e){var n;return(null==e?void 0:null===(n=e.definition)||void 0===n?void 0:n.status)===f.b.CREATING&&e.typeName!==l.a.SESSION_GROUP_CREATION_JOB})},E=function hasCreatingContext(e){return!!e.find(function(e){var n;return(null===(n=e.definition)||void 0===n?void 0:n.status)===f.b.CREATING})},g=function getCreatedContexts(e){return e.filter(function(e){return e.typeName!==l.a.SESSION_GROUP_CREATION_JOB&&f.a[e.definition.status]!==f.b.CREATING})},N=function getLatestSelectableBranchId(e){var n;if(1===e.length)return e[0].definition.authoringCourseBranchId;var t=function isNotArchived(e){return![f.b.ARCHIVED,f.b.ENDED].includes(e.definition.status)},r=function isAlreadyCreated(e){return e.definition.status!==f.b.CREATING},a=e.filter(function(e){return t(e)&&r(e)});0===a.length&&(a=e.filter(r));var o=i()(a,function(e){return e.definition.createdAt})||a[0];return(null==o?void 0:null===(n=o.definition)||void 0===n?void 0:n.authoringCourseBranchId)||null},y=function canCreateNewBranch(e){var n=function isPrivate(e){return e.typeName!==l.a.PUBLIC_BRANCH};return!e.find(function(e){var t=f.a[e.definition.status];return t!==f.b.LIVE&&t!==f.b.ARCHIVED&&!n(e)&&e.definition.status!==f.b.UPCOMING})},I=function shouldHideCatalogContexts(e){return e.isRestrictedMembership&&!e.isLimitedToEnterprise},L=function isPartnerOrganization(e,n){var t=n.isPrivateAuthoringPartner,r=void 0!==t&&t;return e.isLimitedToEnterprise||r},w=function getCatalogMessages(e,n){var t=L(e,n);return{contextLabel:t?m()("Your Organization"):m()("Public"),labelTooltip:t?m()("Enrollment available only to learners in your organization"):m()("Enrollment available to all Coursera learners"),zeroStateMessage:t?m()("No instances created for your organization yet."):m()("No public versions have been created in this course. Click <strong>Create New</strong> if you'd like to create a public version so that anyone can enroll from the public Coursera catalog.")}}},ONUL:function(module,e,n){"use strict";n.d(e,"b",function(){return u});var t=n("M6Ur"),r={isLaunched:function isLaunched(e){return!!e.launchedAt&&e.launchedAt<=Date.now()},isPreEnrollmentEnabled:function isPreEnrollmentEnabled(e){return!this.isLaunched(e)&&"preEnrollmentEnabledAt"in e},isSessionsModeEnabled:function isSessionsModeEnabled(e){return"sessionsEnabledAt"in e&&e.sessionsEnabledAt<=Date.now()},isVerificationEnabled:function isVerificationEnabled(e){return e.verificationEnabledAt<=Date.now()},isPrivate:function isPrivate(e){return Object(t.a)(e)}};e.a=r;var a=r.isLaunched,i=r.isPreEnrollmentEnabled,o=r.isSessionsModeEnabled,s=r.isVerificationEnabled,u=r.isPrivate},TV8g:function(module,e,n){"use strict";var t=n("wiyT"),r=n.n(t),a=n("BDKN"),i=n.n(a),o=n("43qm");e.a=function(e){var n=(new i.a).addQueryParam("q","findByUser").addQueryParam("userId",e);return r()(o.a.get(n.toString()))}},dMi0:function(module,exports,e){var n=e("lyyl"),t=e("JC6p"),r=e("ut/Y");function findKey(e,a){return n(e,r(a,3),t)}module.exports=findKey},"j+0V":function(module,e,n){"use strict";n.r(e);var t=n("VbXa"),r=n.n(t),a=n("sbe7"),i=n.n(a),o=n("CMO8"),s=n("DliG"),u=n("xM+b"),c=n("yjYA"),l=n("EAIP"),d=n.n(l),f=[{key:"weeklyActiveLearner",component:u.a},{key:"weeklyNewLearner",component:c.a},{key:"totalLearner",component:s.a}],h=function(e){function TeachBanner(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={course:null,membership:null,learnerCounts:{},bannerIndex:-1,dismissed:!1},n.handleDismiss=function(){o.a.setVisitedTimestamp(),n.setState({dismissed:!0})},n}r()(TeachBanner,e);var n=TeachBanner.prototype;return n.componentDidMount=function componentDidMount(){var e=this;o.a.getBannerData().spread(function(n,t,r){var a=Math.round(Math.random()*(f.length-1));e.setState({course:t,membership:n,learnerCounts:r,bannerIndex:a})}).catch(function(){}).done()},n.renderBanner=function renderBanner(){var e=f[this.state.bannerIndex].component;return i.a.createElement(e,{course:this.state.course,learnerCounts:this.state.learnerCounts})},n.render=function render(){if(!this.state.course||this.state.dismissed||!o.a.shouldShow())return i.a.createElement("div",null);return i.a.createElement("div",{className:"rc-TeachBanner bt3-alert bt3-alert-info bt3-alert-dismissable"},i.a.createElement("div",{className:"c-teach-banner-content"},i.a.createElement("button",{onClick:this.handleDismiss,className:"bt3-close","data-dismiss":"alert","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"×")),this.renderBanner()))},TeachBanner}(i.a.Component);e.default=h},jQVW:function(module,e,n){"use strict";n.d(e,"a",function(){return t});var t=Object.freeze({PRIVATE_BRANCH:"privateBranchContext",PUBLIC_BRANCH:"publicBranchContext",SESSION_GROUP:"sessionGroupContext",SESSION_GROUP_CREATION_JOB:"sessionGroupCreationJobContext"}),r=t},lyyl:function(module,exports){function baseFindKey(e,n,t){var r;return t(e,function(e,t,a){if(n(e,t,a))return r=t,!1}),r}module.exports=baseFindKey},qXB5:function(module,e,n){"use strict";n.d(e,"a",function(){return o});var t=n("lSNA"),r=n.n(t),a,i=Object.freeze({LIVE:"live",NEW:"new",UPCOMING:"upcoming",ARCHIVED:"archived",CREATING:"creating",FAILED:"failed",RUNNING:"running",ENDED:"ended",PENDING:"pending",OPEN:"open"});e.b=i;var o=(a={},r()(a,i.NEW,i.NEW),r()(a,i.FAILED,i.FAILED),r()(a,i.UPCOMING,i.UPCOMING),r()(a,i.LIVE,i.LIVE),r()(a,i.ARCHIVED,i.ARCHIVED),r()(a,i.RUNNING,i.LIVE),r()(a,i.ENDED,i.ARCHIVED),r()(a,i.PENDING,i.UPCOMING),r()(a,i.OPEN,i.LIVE),r()(a,i.CREATING,i.CREATING),a)},"xM+b":function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),i=n.n(a),o=n("sbe7"),s=n.n(o),u=n("CMO8"),c=n("kvW3"),l=function(e){function WeeklyActiveLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyActiveLearnerBanner,e),WeeklyActiveLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getWeeklyActiveLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-WeeklyActiveLearnerBanner"},s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","were active in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},WeeklyActiveLearnerBanner}(s.a.Component);l.propTypes={course:i.a.object.isRequired,learnerCounts:i.a.object.isRequired},e.a=l},xxrO:function(module,e,n){"use strict";var t=n("welz"),r=n.n(t),a=n("4uJh"),i=r.a.Collection.extend({model:a.a,getEnrolled:function getEnrolled(){return this.filter(function(e){return e.get("courseRole")!==a.a.NOT_ENROLLED})}});e.a=i},yjYA:function(module,e,n){"use strict";var t=n("VbXa"),r=n.n(t),a=n("17x9"),i=n.n(a),o=n("sbe7"),s=n.n(o),u=n("CMO8"),c=n("kvW3"),l=function(e){function WeeklyNewLearnerBanner(){return e.apply(this,arguments)||this}var n;return r()(WeeklyNewLearnerBanner,e),WeeklyNewLearnerBanner.prototype.render=function render(){var e=this.props.course,n=e.name,t="/teach/".concat(e.slug),r=u.a.getWeeklyNewLearnerCount(this.props.learnerCounts);return s.a.createElement("div",{className:"rc-WeeklyNewLearnerBanner"},s.a.createElement("a",{href:t},s.a.createElement("strong",{className:"c-teach-banner-learner-count"},s.a.createElement(c.c,{value:r})," learners"))," ","enrolled in ",s.a.createElement("span",{className:"c-teach-banner-course-name"},n)," in the past week. View more on the"," ",s.a.createElement("a",{href:t},s.a.createElement("strong",null,"Course Dashboard.")))},WeeklyNewLearnerBanner}(s.a.Component);l.propTypes={course:i.a.object.isRequired,learnerCounts:i.a.object.isRequired},e.a=l}}]);
//# sourceMappingURL=61.d56ccd7bec6802eeea17.js.map
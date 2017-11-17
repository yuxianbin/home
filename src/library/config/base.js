/**
 * Revised by zhusass on 2017/11/17.
 */

let base = {}

/********************** a 系统 ************************************/
// router
base.a_router_name = {
    system: {
       name: '月光',
    },
    a_incomeSummarize: {
        name: '概括',
        parent: '月收入',
    },
    a_otherIncome: {
        name: '其它收入',
        parent: '月收入',
    },
    a_consumeSummarize: {
        name: '概括',
        parent: '月消费',
    },
    a_otherConsume: {
        name: '其它消费',
        parent: '月消费',
    },
    a_earningsEarnings: {
        name: '概括',
        parent: '月收益',
    },
    a_earningsEvaluate: {
        name: '评价',
        parent: '月收益',
    },
}

export default base


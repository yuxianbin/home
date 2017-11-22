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
        name: '收入设置',
        parent: '收入',
    },
    a_consumeSummarize: {
        name: '消费设置',
        parent: '消费',
    },
    a_incomeDetails: {
        name: '详情',
        parent: '月收益',
    },
    a_earningsEvaluate: {
        name: '评价',
        parent: '月收益',
    },
}

export default base


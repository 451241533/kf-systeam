<template>
    <div class="main">
        <div class="cardTitle">
            {{!!title ? title : 矿池}}
        </div>
        <div class="card_content">
            <div class="toptext">
              <div class="big_text">
                {{text}}
              </div>
              <div class="right">
                <div class="r_left">
                    可随时取出
                </div>
                <div class="r_right">
                    <span>已购买用户</span>
                    <span class="people_num">99999</span>
                </div>
              </div>
            </div>
            <!-- 收益部分 -->
            <div class="income">
                <div class="income_top">
                    <div class="l_income">
                        <p>固定收益 <span class="income_num">0.4%</span></p>
                    </div>
                    <div class="r_income">
                        <p><span class="r_income_title">已购买</span> <span class="income_num">999999.99</span><span class="unit">USDT</span></p>
                    </div>
                </div>
                <div class="income_bot">
                    <div class="l_income">
                        <p>动态收益 <span class="income_num">0.4%</span></p>
                    </div>
                    <div class="r_income">
                        <p><span class="r_income_title">已购买</span> <span class="income_num">999999.99</span><span class="unit">USDT</span></p>
                    </div>
                </div>
            </div>
            <!-- button部分 -->
            <!-- <van-button type="danger" width="10" size="mini" text="提现"  /> -->
            <div class="btn-group">
                <div class="left-btn">
                    提现
                </div>
                <div class="right-btn">
                    购买
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
name:'messageCard',
props: {
      text: {
        type: String,
        default: '',
        required: false
      },
    //   title
    title: {
        type: String,
        default: '',
        required: false
      },
      src: {
        type: String,
        default: '',
        required: false
      }
    },
data(){
    return{
        topTitle:''
    }
}

}
</script>
<style lang="less"  scoped>
.main{
    width: 100%;
    margin-bottom: 4px;
    // height: 373px;
    .cardTitle{
        font-size: 7px;
        font-weight: 700;
        padding-bottom: 3px;
    }
    .card_content{
        border: .5px solid black;
        border-radius: 2%;
        .toptext{
            display: flex;
            justify-content: space-between;
            margin-top: 2px;
            font-weight: 700;
            font-size: 7px;
            line-height: 20px;
            .big_text{
                margin-left: 3px;
                font-size: 8px;
                width: 17%;
            }
            .right{
                width: 80%;
                display: flex;
                line-height: 22px;
                justify-content: space-between;
                font-size: 5px;
                .r_left{
                    margin-left: 3px;
                }
                .r_right{
                    .people_num{
                        color: orange;
                        margin-left: 10px;
                        margin-right: 3px;
                    }
                }
            }
        }
        .income{
            font-size: 6px;
            font-weight: 700;
            margin: 1px 5px;
            .income_top{
                display: flex;
                .l_income{
                    width: 40%;
                    .income_num{
                        color: orange;

                    }
                }
                .r_income{
                    margin-left: 6px;
                    width: 60%;
                    .income_num{
                        color: orange;
                        // margin-left: 1px;
                      
                    }
                    .unit{
                        color: orange;
                            font-size: 6px;
                            margin-left: 2px;
                        }
                    .r_income_title{
                        margin-right: 6px;
                    }
                }
            }
            .income_bot{
                display: flex;
                margin: 10px auto;
                .l_income{
                    width: 40%;
                    .income_num{
                        color: orange;

                    }
                }
                .r_income{
                    margin-left: 6px;
                    width: 60%;
                    .income_num{
                        color: orange;
                        // margin-left: 1px;
                      
                    }
                    .unit{
                        color: orange;
                            font-size: 6px;
                            margin-left: 2px;
                        }
                    .r_income_title{
                        margin-right: 6px;
                    }
                }
            }
        }
        .btn-group{
            display: flex;
            justify-content: space-around;
            text-align: center;
            align-items: center;
            margin-bottom: 5px;
            .left-btn{
                width: 40%;
                background: #ff0000;
                color: #fff;
                border-radius: 3%;
                cursor: pointer;
            }
            .right-btn{
                width: 40%;
                background: #66cc33;
                color: #fff;
                border-radius: 3%;
                cursor: pointer;
            }
        }
    }
}
</style>
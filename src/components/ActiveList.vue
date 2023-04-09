<template>
  <div>
    <div class="full-container">
      <div class="news-list-item"
           style="padding-top: 20px;"
           @click="$router.push({name: 'ResultActive'})">
        <div><img src="../assets/images/new1.png"
                  alt=""></div>
        <div class="news-desc">
          <div class="flex-sb flex-start">
            <h3>全国第一个线下全产业技术展示馆启动，展示项目征集中!</h3>
            <el-tag type="success">进行中</el-tag>
          </div>
          <div class="active-time df"><span class="label">活动时间：</span><span>2019年11月11日</span></div>
          <div class="active-profile"><span class="label">活动简介: </span><span>首期产业技术馆展示技术全面征集中，如果您的技术有足够市场容量和推广价值有足够技术亮点，如果您想加大技术的推广力度，获得更多技术报道以及曝光率，请及时联系我们。</span>
          </div>
          <el-button type="primary">报名参加</el-button>
        </div>
      </div>
    </div>
    <div class="full-container">
      <div class="news-list-item"
           style="padding-top: 20px;"
           @click="$router.push({name: 'ResultActive'})">
        <div><img src="../assets/images/new1.png"
                  alt=""></div>
        <div class="news-desc">
          <div class="flex-sb flex-start">
            <h3>全国第一个线下全产业技术展示馆启动，展示项目征集中!</h3>
            <el-tag type="danger">已结束</el-tag>
          </div>
          <div class="active-time df"><span class="label">活动时间：</span><span>2019年11月11日</span></div>
          <div class="active-profile"><span class="label">活动简介:</span><span>首期产业技术馆展示技术全面征集中，如果您的技术有足够市场容量和推广价值有足够技术亮点，如果您想加大技术的推广力度，获得更多技术报道以及曝光率，请及时联系我们。</span>
          </div>
          <el-button type="success"
                     size="small"
                     style="width: 98px;height: 40px">已报名
          </el-button>
        </div>
      </div>
    </div>
    <div class="page-size-class">
      <div>
        <el-pagination
          background
          :current-page="2"
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveList"
};
</script>

<style lang="scss">
.news-list-item {
  width: 1240px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  //;

  .news-desc {
    width: 736px;
    margin-left: 60px;

    h3 {
      max-width: 700px;
    }
  }

  img {
    width: 426px;
    height: 267px;

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    margin: 0;
    font-size: 30px;
    padding-bottom: 30px;

    &:hover {
      cursor: pointer;
      color: #E68140
    }
  }

  p {
    margin: 0;
    //font-size: 24px;
    padding-bottom: 30px;

    &:hover {
      cursor: pointer;
      color: #E68140
    }
  }

}

.tab-container {
  padding: 20px 0;
}

.news-tab {
  width: 1240px;
  margin: 0 auto;
  font-size: 20px;

  span {
    margin-left: 58px;

    &:hover {
      cursor: pointer;
    }
  }

  .is-active {
    border-radius: 5px;
    color: #ffffff;
    padding: 8px 30px;
    background: #E1660D;
  }
}

.flex-start {
  align-items: flex-start;
}

.active-time {
  font-size: 16px;
  margin-bottom: 30px;

  .label {
    min-width: 80px;
    margin-right: 10px;
  }
}

.active-profile {
  display: flex;
  margin-bottom: 30px;
  height: 48px;
  max-height: 48px;
  overflow: hidden;

  .label {
    min-width: 80px;
    margin-right: 10px;
  }
}
</style>

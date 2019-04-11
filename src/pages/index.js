import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>那是真的牛批</h1>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

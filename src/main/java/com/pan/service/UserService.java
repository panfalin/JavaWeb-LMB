package com.pan.service;

import com.pan.mapper.UserMapper;
import com.pan.pojo.User;
import com.pan.util.SqlSessionFactoryUtils;
import com.pan.mapper.UserMapper;
import com.pan.pojo.User;
import com.pan.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class UserService {
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();
    /**
     * 根据用户名查询
     * @param username
     */
    public boolean selectByUsername(String username){
        //调用BrandMapper.selectAll()
        // 2. 获取SqlSession
        SqlSession sqlSession = factory.openSession();
        //3. 获取BrandMapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        //4. 调用方法
        User user = mapper.selectByUsername(username);
        //释放资源
        sqlSession.close();
        if (user!=null){
            return true;
        }else {
            return false;
        }
    }

}




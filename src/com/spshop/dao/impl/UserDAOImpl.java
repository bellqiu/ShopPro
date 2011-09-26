package com.spshop.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.spshop.dao.AbstractBaseDAO;
import com.spshop.dao.intf.UserDAO;
import com.spshop.model.User;

public class UserDAOImpl extends AbstractBaseDAO<User, Long> implements UserDAO {

	@Override
	public int queryUserCountByName(String email) {
		List<Criterion> list = new ArrayList<Criterion>();
		if (!StringUtils.isEmpty(email)) {
			Criterion criterion1 = Restrictions.eq("email", email);
			list.add(criterion1);
		}
		Criterion[] criterions = {};
		if (list != null && list.size() > 0) {
			criterions = new Criterion[list.size()];
			for (int i = 0; i < list.size(); i++) {
				criterions[i] = list.get(i);
			}
		}

		return findByCriteria(criterions).size();
	}

	@Override
	public User queryUserByEmailAndPassword(User user) {
		List<Criterion> list = new ArrayList<Criterion>();
		if (!StringUtils.isEmpty(user.getEmail())) {
			Criterion criterion1 = Restrictions.eq("email", user.getEmail());
			list.add(criterion1);
		}
		if (!StringUtils.isEmpty(user.getPassword())) {
			Criterion criterion1 = Restrictions.eq("password",
					user.getPassword());
			list.add(criterion1);
		}
		Criterion[] criterions = {};
		if (list != null && list.size() > 0) {
			criterions = new Criterion[list.size()];
			for (int i = 0; i < list.size(); i++) {
				criterions[i] = list.get(i);
			}
		}
		List<User> users = findByCriteria(criterions);
        if (users != null && users.size()>0) {
            return users.get(0);
        }
		return null;
	}

	@Override
	public User queryUserByName(String email) {
		List<Criterion> list = new ArrayList<Criterion>();
		if (!StringUtils.isEmpty(email)) {
			Criterion criterion1 = Restrictions.eq("email", email);
			list.add(criterion1);
		}
		Criterion[] criterions = {};
		if (list != null && list.size() > 0) {
			criterions = new Criterion[list.size()];
			for (int i = 0; i < list.size(); i++) {
				criterions[i] = list.get(i);
			}
		}
		List<User> users = findByCriteria(criterions);
		if (users != null && users.size()>0) {
			return users.get(0);
		}
		return null;
	}

}

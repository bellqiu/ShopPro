package com.spshop.model;

public class User extends Component{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 5322585792062205187L;
	private String email;
	private String telephone;
	private String firstName;
	private String lastName;
	private String password;
	private String country;
	private String address;
	private String zipcode;
	private String city;
	private String gender;
	
	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(User user) {
	    super(user);
    }

    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setCity(String city) {
        this.city = city;
    }

    public String getCity() {
        return city;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getGender() {
        return gender;
    }

    /**
	 * @autogenerated by CodeHaggis (http://sourceforge.net/projects/haggis)
	 * clone
	 * @return Object
	 */
	public User clone() {
		User obj = null;
		obj = new User(this);
		
		if (this.email != null) {
			/* Does not have a clone() method */
			obj.email = this.email;
		}
		if (this.telephone != null) {
			/* Does not have a clone() method */
			obj.telephone = this.telephone;
		}
		if (this.firstName != null) {
			/* Does not have a clone() method */
			obj.firstName = this.firstName;
		}
		if (this.lastName != null) {
			/* Does not have a clone() method */
			obj.lastName = this.lastName;
		}
		if (this.password != null) {
			/* Does not have a clone() method */
			obj.password = this.password;
		}
		if (this.country != null) {
			/* Does not have a clone() method */
			obj.country = this.country;
		}
		if (this.address != null) {
			/* Does not have a clone() method */
			obj.address = this.address;
		}
		if (this.zipcode != null) {
			/* Does not have a clone() method */
			obj.zipcode = this.zipcode;
		}
		if (this.gender != null) {
            /* Does not have a clone() method */
            obj.gender = this.gender;
        }
		if (this.city != null) {
            /* Does not have a clone() method */
            obj.city = this.city;
        }
		return obj;
	}


}

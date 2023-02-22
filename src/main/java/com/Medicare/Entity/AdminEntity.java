package com.Medicare.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Admin")
public class AdminEntity {

	@Id
	@GeneratedValue()
	private long id;

	private String login;
	private String password;

	public AdminEntity() {
		super();
	}

	public AdminEntity(long id, String login, String password) {
		super();
		this.id = id;
		this.login = login;
		this.password = password;
	}

	public void setId(long id) {
		this.id = id;
	}

	public AdminEntity(String login, String password) {
		super();
		this.login = login;
		this.password = password;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}

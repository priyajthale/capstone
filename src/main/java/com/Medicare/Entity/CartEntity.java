package com.Medicare.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Carts")
public class CartEntity {
	
	@Id
	@GeneratedValue()
	private long id;
	
	private int tQty;
	private int tPrice;
	
	@OneToOne(targetEntity = UserEntity.class)
	@JoinColumn(nullable = false, name = "user_id")
	private UserEntity user;
	
	@ManyToOne()
	@JoinColumn(name = "product_id")
	private ProductsEntity product;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int gettQty() {
		return tQty;
	}

	public void settQty(int tQty) {
		this.tQty = tQty;
	}

	public int gettPrice() {
		return tPrice;
	}

	public void settPrice(int tPrice) {
		this.tPrice = tPrice;
	}

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	public ProductsEntity getProducts() {
		return product;
	}

	public void setProducts(ProductsEntity product) {
		this.product = product;
	}

	
	public CartEntity() {
		super();
	}
	
	public CartEntity(UserEntity user, ProductsEntity product) {
		this.user = user;
		this.product = product;
	}

	public CartEntity(long id, int tQty, int tPrice, UserEntity user, ProductsEntity product) {
		super();
		this.id = id;
		this.tQty = tQty;
		this.tPrice = tPrice;
		this.user = user;
		this.product = product;
	}
	
	

}

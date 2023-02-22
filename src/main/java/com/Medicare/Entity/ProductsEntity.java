package com.Medicare.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Product")
public class ProductsEntity {

	@Id
	@GeneratedValue
	private long id;
	private String pName;
	private int pPrice;
	private String pSeller;
	private String pDescription;
	private String url;
	private int qty;
	private String pOffer;
	
	public ProductsEntity() {
		super();
	}

	public ProductsEntity(long id, String pName, int pPrice, String pSeller, String pDescription, String url, int qty,
			String pOffer) {
		super();
		this.id = id;
		this.pName = pName;
		this.pPrice = pPrice;
		this.pSeller = pSeller;
		this.pDescription = pDescription;
		this.url = url;
		this.qty = qty;
		this.pOffer = pOffer;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	


	public String getpSeller() {
		return pSeller;
	}

	public void setpSeller(String pSeller) {
		this.pSeller = pSeller;
	}

	public String getpOffer() {
		return pOffer;
	}

	public void setpOffer(String pOffer) {
		this.pOffer = pOffer;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getpDescription() {
		return pDescription;
	}

	public void setpDescription(String pDescription) {
		this.pDescription = pDescription;
	}

	public int getpPrice() {
		return pPrice;
	}

	public void setpPrice(int pPrice) {
		this.pPrice = pPrice;
	}

}
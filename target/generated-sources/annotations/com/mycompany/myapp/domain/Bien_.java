package com.mycompany.myapp.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Bien.class)
public abstract class Bien_ {

	public static volatile SingularAttribute<Bien, EtatBien> etatBien;
	public static volatile SingularAttribute<Bien, String> localite;
	public static volatile SingularAttribute<Bien, LocalDate> anneeConstruction;
	public static volatile SingularAttribute<Bien, Double> prix;
	public static volatile SingularAttribute<Bien, Double> nbPieces;
	public static volatile SingularAttribute<Bien, String> description;
	public static volatile SingularAttribute<Bien, byte[]> photo;
	public static volatile SingularAttribute<Bien, TypeBien> typeBien;
	public static volatile SingularAttribute<Bien, String> adresse;
	public static volatile SingularAttribute<Bien, Client> client;
	public static volatile SingularAttribute<Bien, Long> id;
	public static volatile SingularAttribute<Bien, String> photoContentType;
	public static volatile SingularAttribute<Bien, Integer> npa;

}


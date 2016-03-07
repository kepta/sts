# CODEPRO

Some of the salient features
- Static code analysis
- Defect detection, repair and reporting
- Automated JUnit test
- Mock Objects support
- JUnit Testing for Spring, Struts, JSF and EJB frameworks
Error/Warning/Info can be changed for every item.
- Unnecessary Import
- Duplicate Import
- Empty Try or Catch Statements
- Comparison of strings using ==
- Float Comparisons
- JUnit test editor
- Analysis and reporting for duplicate code, dead code and dependencies
- Code metrics with drilldown & triggers
- Code coverage analysis


## Project 1: Bus

| Problems identified by the Tool| Actual Errors |False Alarms |Justify |
|---|---|---|---|---|
|  13xDuplicate Import Declaration | No |   Yes|   They are not errors, just warning of a good programming  practice |
|  12Empty Catch Clause | No  |   Yes|  This rule finds places where an exception is caught and nothing is done. It can be configured to allow the existence of a comment to substitute for actual Java code.
| 7xImport of implicit package|  No|  Yes |  This audit rule checks to ensure that none of the import declarations imports from a package that is implicitly imported (either java.lang or the package containing the compilation unit being audited). |
| Unnecessary import declarations|No | Yes|There should not be imports for types or packages that are not referenced. | |

False Positive : 22

*True Positive* : 0

Precision : 0



## Project 4
| Problems identified by the Tool| Actual Errors |False Alarms |Justify |
|---|---|---|---|---|
|5 x caught exception not logged| No | Yes| An exception has been caught but not logged.|

False Positive: 5;
*True Positive* : 0
Precision : 0

# FindBugs

# Project 1

| Problems identified by the Tool| Actual Errors |False Alarms |Justify |
|---|---|---|---|---|
| Method names start with upper case letter * 6| No | Yes | Methods are expected to have an Uppercase start|
 |Empty field * 4 | Yes| No | An empty field can cause serious void errors |
 |Reading protected field * 1 | Yes | No |  Reading of protected field is a severe error which results in non execution of program|
| Use of static classes| No | No| This is just a programming paradigm to avoid using static classes and go fully OOP |

True Positive: 5
False Positive: 6
Precision : 5/11 = 0.45


# Project 4

| Problems identified by the Tool| Actual Errors |False Alarms |Justify |
|---|---|---|---|---|

This tool was unable to find any errors in the code.


```
Description	Resource	Path	Location	Type
AddNewEntry cannot be resolved to a type	Employee.java	/Jojo/src	line 93	Java Problem
Connect cannot be resolved	AddEntry.java	/Jojo/src	line 172	Java Problem
Connect cannot be resolved	AddEntry.java	/Jojo/src	line 211	Java Problem
Connect cannot be resolved	AddEntry.java	/Jojo/src	line 261	Java Problem
Connect cannot be resolved	Booking_report.java	/Jojo/src	line 95	Java Problem
Connect cannot be resolved	Booking_report.java	/Jojo/src	line 114	Java Problem
Connect cannot be resolved	Bus_Details.java	/Jojo/src	line 100	Java Problem
Connect cannot be resolved	Bus_Details.java	/Jojo/src	line 126	Java Problem
Connect cannot be resolved	Employee.java	/Jojo/src	line 85	Java Problem
Connect cannot be resolved	Employee.java	/Jojo/src	line 194	Java Problem
Connect cannot be resolved	Main.java	/Jojo/src	line 78	Java Problem
Connect cannot be resolved	Main.java	/Jojo/src	line 180	Java Problem
Connect cannot be resolved	NewUser.java	/Jojo/src	line 136	Java Problem
Connect cannot be resolved	PASS.java	/Jojo/src	line 73	Java Problem
Connect cannot be resolved	PASS.java	/Jojo/src	line 169	Java Problem
Connect cannot be resolved	Receipt.java	/Jojo/src	line 83	Java Problem
Connect cannot be resolved	Schedule.java	/Jojo/src	line 168	Java Problem
Connect cannot be resolved	Schedule.java	/Jojo/src	line 245	Java Problem
Connect cannot be resolved	Schedule.java	/Jojo/src	line 258	Java Problem
Connect cannot be resolved	Schedule.java	/Jojo/src	line 273	Java Problem
Connect cannot be resolved	Schedule.java	/Jojo/src	line 294	Java Problem
Connect cannot be resolved	Schedule.java	/Jojo/src	line 327	Java Problem
Connect cannot be resolved	Scheduling_report.java	/Jojo/src	line 94	Java Problem
Connect cannot be resolved	Scheduling_report.java	/Jojo/src	line 113	Java Problem
Connect cannot be resolved	Show_schedules.java	/Jojo/src	line 75	Java Problem
Connect cannot be resolved	Show_schedules.java	/Jojo/src	line 81	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 65	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 67	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 69	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 99	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 99	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 100	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 100	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 101	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 101	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 102	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 103	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 104	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 116	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 120	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 122	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 213	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 213	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 213	Java Problem
DateButton cannot be resolved to a type	AddEntry.java	/Jojo/src	line 237	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 63	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 109	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 109	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 147	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 292	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 292	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 329	Java Problem
DateButton cannot be resolved to a type	Schedule.java	/Jojo/src	line 331	Java Problem
employee_report cannot be resolved to a type	Employee.java	/Jojo/src	line 111	Java Problem
LoginScreen cannot be resolved to a type	AddEntry.java	/Jojo/src	line 278	Java Problem
LoginScreen cannot be resolved to a type	Employee.java	/Jojo/src	line 188	Java Problem
LoginScreen cannot be resolved to a type	Main.java	/Jojo/src	line 250	Java Problem
LoginScreen cannot be resolved to a type	PASS.java	/Jojo/src	line 192	Java Problem
LoginScreen cannot be resolved to a type	Show_schedules.java	/Jojo/src	line 172	Java Problem
MainMenu cannot be resolved to a type	NewUser.java	/Jojo/src	line 159	Java Problem
MainMenu cannot be resolved to a type	Schedule.java	/Jojo/src	line 286	Java Problem
NewEntry cannot be resolved to a type	Employee.java	/Jojo/src	line 99	Java Problem
Passenger cannot be resolved to a type	PASS.java	/Jojo/src	line 81	Java Problem
Payment cannot be resolved to a type	Receipt.java	/Jojo/src	line 117	Java Problem
Payment cannot be resolved to a type	Receipt.java	/Jojo/src	line 118	Java Problem
Payment cannot be resolved to a type	Receipt.java	/Jojo/src	line 119	Java Problem
Payment cannot be resolved to a type	Receipt.java	/Jojo/src	line 120	Java Problem
Payment cannot be resolved to a type	Receipt.java	/Jojo/src	line 121	Java Problem
Payment cannot be resolved to a type	Receipt.java	/Jojo/src	line 122	Java Problem
Up_date_Pass cannot be resolved to a type	PASS.java	/Jojo/src	line 101	Java Problem
UpdateEntry cannot be resolved to a type	Main.java	/Jojo/src	line 112	Java Problem
Build path specifies execution environment JavaSE-1.7. There are no JREs installed in the workspace that are strictly compatible with this environment. 	Jojo		Build path	JRE System Library Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Booking_report.java	/Jojo/src	line 26	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Bus_Details.java	/Jojo/src	line 31	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	NewUser.java	/Jojo/src	line 43	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	NewUser.java	/Jojo/src	line 59	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 37	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 39	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 41	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 43	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 45	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 47	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 49	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 97	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 98	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 99	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 100	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 101	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 102	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 104	Java Problem
JComboBox is a raw type. References to generic type JComboBox<E> should be parameterized	Scheduling_report.java	/Jojo/src	line 25	Java Problem
Read of unwritten public or protected field imageIcon in new Receipt$1(Receipt) [Troubling(14), Normal confidence]	Receipt.java	/Jojo/src	line 100	FindBugs Problem (Troubling)
The import java.awt is never used	Receipt.java	/Jojo/src	line 8	Java Problem
The import java.awt.event is never used	Receipt.java	/Jojo/src	line 9	Java Problem
The import java.sql is never used	Receipt.java	/Jojo/src	line 10	Java Problem
The import java.text is never used	Receipt.java	/Jojo/src	line 12	Java Problem
The import java.util.Date is never used	Receipt.java	/Jojo/src	line 13	Java Problem
The import javax.swing is never used	AddEntry.java	/Jojo/src	line 7	Java Problem
The import javax.swing is never used	Employee.java	/Jojo/src	line 7	Java Problem
The import javax.swing is never used	Main.java	/Jojo/src	line 7	Java Problem
The import javax.swing is never used	NewUser.java	/Jojo/src	line 7	Java Problem
The import javax.swing is never used	PASS.java	/Jojo/src	line 7	Java Problem
The import javax.swing is never used	Receipt.java	/Jojo/src	line 11	Java Problem
The import javax.swing is never used	Schedule.java	/Jojo/src	line 7	Java Problem
The import javax.swing is never used	Show_schedules.java	/Jojo/src	line 7	Java Problem
The method getText() from the type JPasswordField is deprecated	NewUser.java	/Jojo/src	line 120	Java Problem
The method getText() from the type JPasswordField is deprecated	NewUser.java	/Jojo/src	line 120	Java Problem
The method getText() from the type JPasswordField is deprecated	NewUser.java	/Jojo/src	line 125	Java Problem
The method getText() from the type JPasswordField is deprecated	NewUser.java	/Jojo/src	line 125	Java Problem
The method getText() from the type JPasswordField is deprecated	NewUser.java	/Jojo/src	line 130	Java Problem
The method getText() from the type JPasswordField is deprecated	NewUser.java	/Jojo/src	line 130	Java Problem
The method getText() from the type JPasswordField is deprecated	NewUser.java	/Jojo/src	line 138	Java Problem
The serializable class  does not declare a static final serialVersionUID field of type long	Booking_report.java	/Jojo/src	line 68	Java Problem
The serializable class  does not declare a static final serialVersionUID field of type long	Bus_Details.java	/Jojo/src	line 73	Java Problem
The serializable class  does not declare a static final serialVersionUID field of type long	Receipt.java	/Jojo/src	line 99	Java Problem
The serializable class  does not declare a static final serialVersionUID field of type long	Scheduling_report.java	/Jojo/src	line 67	Java Problem
The serializable class AbstractTable does not declare a static final serialVersionUID field of type long	Employee.java	/Jojo/src	line 150	Java Problem
The serializable class AbstractTable does not declare a static final serialVersionUID field of type long	Main.java	/Jojo/src	line 142	Java Problem
The serializable class AbstractTable does not declare a static final serialVersionUID field of type long	PASS.java	/Jojo/src	line 131	Java Problem
The serializable class AbstractTable does not declare a static final serialVersionUID field of type long	Show_schedules.java	/Jojo/src	line 134	Java Problem
The serializable class AddEntry does not declare a static final serialVersionUID field of type long	AddEntry.java	/Jojo/src	line 14	Java Problem
The serializable class Booking_report does not declare a static final serialVersionUID field of type long	Booking_report.java	/Jojo/src	line 11	Java Problem
The serializable class Bus_Details does not declare a static final serialVersionUID field of type long	Bus_Details.java	/Jojo/src	line 10	Java Problem
The serializable class Employee does not declare a static final serialVersionUID field of type long	Employee.java	/Jojo/src	line 14	Java Problem
The serializable class Main does not declare a static final serialVersionUID field of type long	Main.java	/Jojo/src	line 16	Java Problem
The serializable class NewUser does not declare a static final serialVersionUID field of type long	NewUser.java	/Jojo/src	line 14	Java Problem
The serializable class PASS does not declare a static final serialVersionUID field of type long	PASS.java	/Jojo/src	line 15	Java Problem
The serializable class Receipt does not declare a static final serialVersionUID field of type long	Receipt.java	/Jojo/src	line 16	Java Problem
The serializable class Schedule does not declare a static final serialVersionUID field of type long	Schedule.java	/Jojo/src	line 16	Java Problem
The serializable class Scheduling_report does not declare a static final serialVersionUID field of type long	Scheduling_report.java	/Jojo/src	line 10	Java Problem
The serializable class Show_schedules does not declare a static final serialVersionUID field of type long	Show_schedules.java	/Jojo/src	line 14	Java Problem
The value of the field Booking_report.dbcon is not used	Booking_report.java	/Jojo/src	line 32	Java Problem
The value of the field Bus_Details.dbcon is not used	Bus_Details.java	/Jojo/src	line 37	Java Problem
The value of the field Employee.AddNew is not used	Employee.java	/Jojo/src	line 41	Java Problem
The value of the field Employee.Clear is not used	Employee.java	/Jojo/src	line 49	Java Problem
The value of the field Employee.dbconn is not used	Employee.java	/Jojo/src	line 59	Java Problem
The value of the field Employee.Exit is not used	Employee.java	/Jojo/src	line 51	Java Problem
The value of the field Employee.info is not used	Employee.java	/Jojo/src	line 61	Java Problem
The value of the field Employee.jButton3 is not used	Employee.java	/Jojo/src	line 35	Java Problem
The value of the field Employee.Remove is not used	Employee.java	/Jojo/src	line 45	Java Problem
The value of the field Employee.rowCnt is not used	Employee.java	/Jojo/src	line 53	Java Problem
The value of the field Employee.Search is not used	Employee.java	/Jojo/src	line 47	Java Problem
The value of the field Employee.Update is not used	Employee.java	/Jojo/src	line 43	Java Problem
The value of the field Main.dbconn is not used	Main.java	/Jojo/src	line 49	Java Problem
The value of the field Main.info is not used	Main.java	/Jojo/src	line 51	Java Problem
The value of the field Main.rowCnt is not used	Main.java	/Jojo/src	line 43	Java Problem
The value of the field Main.txtInfo is not used	Main.java	/Jojo/src	line 47	Java Problem
The value of the field PASS.dbconn is not used	PASS.java	/Jojo/src	line 46	Java Problem
The value of the field PASS.info is not used	PASS.java	/Jojo/src	line 48	Java Problem
The value of the field PASS.rowCnt is not used	PASS.java	/Jojo/src	line 40	Java Problem
The value of the field PASS.txtInfo is not used	PASS.java	/Jojo/src	line 44	Java Problem
The value of the field Receipt.dbcon is not used	Receipt.java	/Jojo/src	line 43	Java Problem
The value of the field Scheduling_report.dbcon is not used	Scheduling_report.java	/Jojo/src	line 31	Java Problem
The value of the field Show_schedules.AddNew is not used	Show_schedules.java	/Jojo/src	line 35	Java Problem
The value of the field Show_schedules.Clear is not used	Show_schedules.java	/Jojo/src	line 43	Java Problem
The value of the field Show_schedules.dbconn is not used	Show_schedules.java	/Jojo/src	line 53	Java Problem
The value of the field Show_schedules.Exit is not used	Show_schedules.java	/Jojo/src	line 45	Java Problem
The value of the field Show_schedules.jButton2 is not used	Show_schedules.java	/Jojo/src	line 31	Java Problem
The value of the field Show_schedules.Remove is not used	Show_schedules.java	/Jojo/src	line 39	Java Problem
The value of the field Show_schedules.rowCnt is not used	Show_schedules.java	/Jojo/src	line 47	Java Problem
The value of the field Show_schedules.Search is not used	Show_schedules.java	/Jojo/src	line 41	Java Problem
The value of the field Show_schedules.Update is not used	Show_schedules.java	/Jojo/src	line 37	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	NewUser.java	/Jojo/src	line 75	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	NewUser.java	/Jojo/src	line 76	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	NewUser.java	/Jojo/src	line 77	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 110	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 111	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 150	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 151	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 152	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 153	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 154	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 155	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 247	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 248	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 260	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 261	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 275	Java Problem
Type safety: The method addItem(Object) belongs to the raw type JComboBox. References to generic type JComboBox<E> should be parameterized	Schedule.java	/Jojo/src	line 276	Java Problem
Unwritten field: Employee.jTable [Troubling(12), Normal confidence]	Employee.java	/Jojo/src	line 133	FindBugs Problem (Troubling)
Unwritten field: Main.jTable [Troubling(12), Normal confidence]	Main.java	/Jojo/src	line 125	FindBugs Problem (Troubling)
Unwritten field: PASS.jTable [Troubling(12), Normal confidence]	PASS.java	/Jojo/src	line 114	FindBugs Problem (Troubling)
Unwritten field: Show_schedules.jTable [Troubling(12), Normal confidence]	Show_schedules.java	/Jojo/src	line 117	FindBugs Problem (Troubling)
```

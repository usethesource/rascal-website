---
title: "module resource::jdbc::JDBC"
---

#### Usage

`import resource::jdbc::JDBC;`

## function registerJDBCClass {#resource-jdbc-JDBC-registerJDBCClass}

* ``void registerJDBCClass(str className)``

Given the name of a JDBC driver class, register it so it can be used in connections.

## function mysqlConnectString {#resource-jdbc-JDBC-mysqlConnectString}

* ``str mysqlConnectString(map[str,str] properties)``

Generate a MySQL connect string.

## data Connection {#resource-jdbc-JDBC-Connection}

```rascal
data Connection  
     = jdbcConnection(int id)
     ;
```

JDBC Connection type

## function createConnection {#resource-jdbc-JDBC-createConnection}

* ``Connection createConnection(str connectString)``

Create a connection based on the given connection string.

## function closeConnection {#resource-jdbc-JDBC-closeConnection}

* ``void closeConnection(Connection connection)``

Close the given connection.

## function getTableTypes {#resource-jdbc-JDBC-getTableTypes}

* ``list[str] getTableTypes(Connection connection)``

Get the types of tables available through this connection.

## data JDBCType {#resource-jdbc-JDBC-JDBCType}

```rascal
data JDBCType  
     = array()
     | bigInt()
     | binary()
     | bit()
     | blob()
     | boolean()
     | char()
     | clob()
     | dataLink()
     | date()
     | decimal()
     | distinct()
     | double()
     | float()
     | integer()
     | javaObject()
     | longNVarChar()
     | longVarBinary()
     | longVarChar()
     | nChar()
     | nClob()
     | null()
     | numeric()
     | nVarChar()
     | other()
     | \real()
     | ref()
     | rowId()
     | smallInt()
     | sqlXML()
     | struct()
     | time()
     | timeStamp()
     | tinyInt()
     | varBinary()
     | varChar()
     ;
```

The JDBC types that could be assigned to various columns.

## data Column {#resource-jdbc-JDBC-Column}

```rascal
data Column  
     = column(str columnName, JDBCType columnType, bool nullable)
     ;
```

A column in a table or view

## data Table {#resource-jdbc-JDBC-Table}

```rascal
data Table  
     = table(str tableName, list[Column] columns)
     ;
```

A table in a database

## function getTableNames {#resource-jdbc-JDBC-getTableNames}

* ``set[str] getTableNames(Connection connection)``

Get the tables visible through this connection (just names).

## function getTables {#resource-jdbc-JDBC-getTables}

* ``set[Table] getTables(Connection connection)``

Get the tables visible through this connection (with column info).

## function getViews {#resource-jdbc-JDBC-getViews}

* ``set[Table] getViews(Connection connection)``

Get the tables visible through this connection (with column info).

## function getTable {#resource-jdbc-JDBC-getTable}

* ``Table getTable(Connection connection, str tableName)``

Get the Table metadata for a named table.

## function getView {#resource-jdbc-JDBC-getView}

* ``Table getView(Connection connection, str viewName)``

Get the Table metadata for a named view.

## data RuntimeException {#resource-jdbc-JDBC-RuntimeException}

```rascal
data RuntimeException  
     = unsupportedJDBCType(JDBCType jdbcType)
     ;
```

An exception thrown when we try to translate (or otherwise use) a JDBC type with no Rascal equivalent.

## function jdbc2RascalType {#resource-jdbc-JDBC-jdbc2RascalType}

* ``Symbol jdbc2RascalType(array())``
* ``Symbol jdbc2RascalType(bigInt())``
* ``Symbol jdbc2RascalType(binary())``
* ``Symbol jdbc2RascalType(bit())``
* ``Symbol jdbc2RascalType(blob())``
* ``Symbol jdbc2RascalType(boolean())``
* ``Symbol jdbc2RascalType(char())``
* ``Symbol jdbc2RascalType(clob())``
* ``Symbol jdbc2RascalType(dataLink())``
* ``Symbol jdbc2RascalType(date())``
* ``Symbol jdbc2RascalType(decimal())``
* ``Symbol jdbc2RascalType(distinct())``
* ``Symbol jdbc2RascalType(double())``
* ``Symbol jdbc2RascalType(float())``
* ``Symbol jdbc2RascalType(integer())``
* ``Symbol jdbc2RascalType(javaObject())``
* ``Symbol jdbc2RascalType(longNVarChar())``
* ``Symbol jdbc2RascalType(longVarBinary())``
* ``Symbol jdbc2RascalType(longVarChar())``
* ``Symbol jdbc2RascalType(nChar())``
* ``Symbol jdbc2RascalType(nClob())``
* ``Symbol jdbc2RascalType(JDBCType::null())``
* ``Symbol jdbc2RascalType(numeric())``
* ``Symbol jdbc2RascalType(nVarChar())``
* ``Symbol jdbc2RascalType(other())``
* ``Symbol jdbc2RascalType(JDBCType::\real())``
* ``Symbol jdbc2RascalType(ref())``
* ``Symbol jdbc2RascalType(rowId())``
* ``Symbol jdbc2RascalType(smallInt())``
* ``Symbol jdbc2RascalType(sqlXML())``
* ``Symbol jdbc2RascalType(struct())``
* ``Symbol jdbc2RascalType(time())``
* ``Symbol jdbc2RascalType(timeStamp())``
* ``Symbol jdbc2RascalType(tinyInt())``
* ``Symbol jdbc2RascalType(varBinary())``
* ``Symbol jdbc2RascalType(varChar())``

Get the Rascal type (as a symbol) for the given JDBC type

## data Nullable {#resource-jdbc-JDBC-Nullable}

```rascal
data Nullable[&T]  
     = null()
     | notnull(&T item)
     ;
```

Represents values which may or may not be null.

## function loadTable {#resource-jdbc-JDBC-loadTable}

* ``set[&T] loadTable(type[&T] resType, Connection connection, str tableName)``
* ``set[value] loadTable(Connection connection, str tableName)``

Load the contents of a table. This will turn the contents into a set, which by its nature will remove any
     duplicates and discard any order. To maintain duplicates, or the order inherent in the table,
     use loadTableOrdered instead.

## function loadTableOrdered {#resource-jdbc-JDBC-loadTableOrdered}

* ``list[&T] loadTableOrdered(type[&T] resType, Connection connection, str tableName)``
* ``list[value] loadTableOrdered(Connection connection, str tableName)``

Load the contents of a table. This maintains order and duplicates, but does not provide access to the
     relational operations provided by loadTable.

## function allTableSchemas {#resource-jdbc-JDBC-allTableSchemas}

* ``str allTableSchemas(str moduleName, loc uri)``

  The JDBC tables schema should be given as:
    jdbctables+connect-string
  where connect-string is the database-specific information needed to connect,
  encoded as a URI, for instance:
    jdbctables+mysql://localhost/bugs?user=my_user_name&password=my_password

## function tableSchema {#resource-jdbc-JDBC-tableSchema}

* ``str tableSchema(str moduleName, loc uri)``


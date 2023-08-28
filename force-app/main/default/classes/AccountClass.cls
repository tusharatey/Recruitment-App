public with sharing class AccountClass {

    @AuraEnabled
    public static void createAccountRecord(Account objAcc){
        try {
            insert objAcc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}
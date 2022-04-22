<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Title");
?>
<? $APPLICATION->IncludeComponent(
    "namespace:component.name",
    "vue",
    []
); ?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
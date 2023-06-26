import Div from "@jumbo/shared/Div/Div";
import React from "react";
import PreliminaryForm from "./components/PreliminaryForm";
import PersonalForm from "./components/PersonalForm";
import MedicalForm from "./components/MedicalForm";
import PhysicalCharacteristicsForm from "./components/PhysicalCharacteristicsForm";
import AddressForm from "./components/AddressForm";
import EducationalForm from "./components/EducationalForm";
import OtherDetailsForm from "./components/OtherDetailsForm";
import DrivingLicenseForm from "./components/DrivingLicenseForm";
import PanCardForm from "./components/PanCardForm";
import VoterCardForm from "./components/VoterCardForm";
import AadharCardForm from "./components/AadharCardForm";
import RationCardForm from "./components/RationCardForm";
import PassportForm from "./components/PassportForm";
import BankAccountForm from "./components/BankAccountForm";
import CreditCardForm from "./components/CreditCardForm";
import OtherIdCardForm from "./components/OtherIdCardForm";
import VehicleForm from "./components/VehicleForm";
import CloseFamilyForm from "./components/CloseFamilyForm";
import CriminalHistoryForm from "./components/CriminalHistoryForm";
import AssociationWithGangForm from "./components/AssociationWithGangForm";
import TravelAndTrainingForm from "./components/TravelAndTrainingForm";
import JailHistoryForm from "./components/JailHistoryForm";
import TypeOfCrimeForm from "./components/TypeOfCrimeForm";
import StatementForm from "./components/StatementForm";
import UploadReleventForm from "./components/UploadReleventForm";

export default function AddIndividual() {
  return (
    <Div>
      <PreliminaryForm/>
      <PersonalForm/>
      <CriminalHistoryForm/>
      <AssociationWithGangForm/>
      <TravelAndTrainingForm/>
      <JailHistoryForm/>
      <TypeOfCrimeForm/>
      <StatementForm/>
      <UploadReleventForm/>
    </Div>
  );
}

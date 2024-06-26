import LeadStatusBtn from "./Components/LeadStatusBtn";
import { Link } from "@inertiajs/react";
import PermissionAllow from '@/Components/PermissionAllow';

export default function ({ lead, attendLead }) {
    return (
        <>
            <table className="table table-hover table-nowrap mb-5">
                <tbody>
                    <tr>
                        <td>
                            Ad.
                        </td>
                        <td className="font-bold">
                            {lead.ad.title} <small>{lead.ad.city}</small>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Name.
                        </td>
                        <td className="font-bold">
                            {lead.firstname} {lead.lastname}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email.
                        </td>
                        <td className="font-bold">
                            {lead.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone.
                        </td>
                        <td className="font-bold">
                            {lead.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Date.
                        </td>
                        <td className="font-bold">
                            {lead.date_text}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Message.
                        </td>
                        <td className="font-bold">
                            {lead.message}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Status.
                        </td>
                        <td>
                            <LeadStatusBtn status={lead.status}></LeadStatusBtn>
                        </td>
                    </tr>
                    {lead.attender && (
                        <tr>
                            <td>
                                Attended by.
                            </td>
                            <td className="font-bold">
                                {lead.attender}
                            </td>
                        </tr>
                    )}
                </tbody>

            </table>
            {lead.status == 0 && (
                <PermissionAllow permission="Ad Lead Edit">
                <div className="row g-5">
                    <div className="col-12 text-end">
                        <button onClick={(e) => attendLead(lead)} type="submit" className="btn btn-primary">Mark as attended</button>
                    </div>
                </div>
                </PermissionAllow>
            )}
        </>
    );
}